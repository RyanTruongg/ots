CREATE TABLE IF NOT EXISTS public."user"
(
	id VARCHAR NOT NULL,

	CONSTRAINT user_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."student"
(
	user_id VARCHAR NOT NULL,
	balance float8,
	
	CONSTRAINT student_fk FOREIGN KEY (user_id) REFERENCES public."user" (id),

	CONSTRAINT student_pk PRIMARY KEY (user_id)
);

CREATE TABLE IF NOT EXISTS public."staff"
(
	user_id VARCHAR NOT NULL,
	phone VARCHAR,
	bank_name VARCHAR,
	bank_account_number VARCHAR,
	
	CONSTRAINT instructor_fk FOREIGN KEY (user_id) REFERENCES public."user" (id),

	CONSTRAINT instructor_pk PRIMARY KEY (user_id)
);

CREATE TABLE IF NOT EXISTS public."subject"
(
	id UUID NOT NULL DEFAULT gen_random_uuid(),
	name VARCHAR,
	description TEXT,
	level VARCHAR,
	img_src VARCHAR,

	CONSTRAINT course_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."course"
(
	id UUID NOT NULL DEFAULT gen_random_uuid(),
	name VARCHAR,
	instructor_id VARCHAR,
	start_date DATE,
	end_date DATE,
	status VARCHAR,
	price FLOAT8,
	max_student int,
	subject_id UUID,
	schedule TEXT,

	CONSTRAINT instructor_course_fk FOREIGN KEY (instructor_id) REFERENCES public."staff" (user_id),
	CONSTRAINT subject_course_fk FOREIGN KEY (subject_id) REFERENCES public."subject" (id),

	CONSTRAINT course_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."voucher" 
(
	code VARCHAR NOT NULL,
	name VARCHAR,
	expire_at DATE,
	discount_rate FLOAT8,
	
	CONSTRAINT voucher_pk PRIMARY KEY (code)
);

CREATE TABLE IF NOT EXISTS public."enrollment"
(
	id UUID NOT NULL DEFAULT gen_random_uuid(),
	course_id UUID NOT NULL,
	student_id VARCHAR NOT NULL,
	
	enrolled_at TIMESTAMP NOT NULL,
	rating VARCHAR,
	feedback_msg VARCHAR,
	average_quiz_score FLOAT8,
	project_score FLOAT8,
	voucher_code VARCHAR,
	
	CONSTRAINT enrollment_course_fk FOREIGN KEY (course_id) REFERENCES public."course" (id),
	CONSTRAINT enrollment_student_fk FOREIGN KEY (student_id) REFERENCES public."student" (user_id),
	CONSTRAINT enrollment_voucher_fk FOREIGN KEY (voucher_code) REFERENCES public."voucher" (code),

	CONSTRAINT enrollment_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."certificate" 
(
	id UUID NOT NULL DEFAULT gen_random_uuid(),
	course_id UUID NOT NULL,
	student_id VARCHAR NOT NULL,
	created_at DATE,
	
 	CONSTRAINT certificate_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."post"
(
	id UUID NOT NULL DEFAULT gen_random_uuid(),
	user_id VARCHAR,
	course_id UUID,
	content VARCHAR,
	created_at TIMESTAMP,
	
	CONSTRAINT post_user_fk FOREIGN KEY (user_id) REFERENCES public."user" (id),
	CONSTRAINT post_course_fk FOREIGN KEY (course_id) REFERENCES public."course" (id),
	
	CONSTRAINT post_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."comment"
(
	id UUID NOT NULL DEFAULT gen_random_uuid(),
	user_id VARCHAR,
	post_id UUID,
	content VARCHAR,
	created_at TIMESTAMP,
	
	CONSTRAINT comment_user_fk FOREIGN KEY (user_id) REFERENCES public."user" (id),
	CONSTRAINT comment_post_fk FOREIGN KEY (post_id) REFERENCES public."post" (id),
	
	CONSTRAINT comment_pk PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."transaction"
(
	id UUID NOT NULL DEFAULT gen_random_uuid(),
	user_id VARCHAR,
	accountant_id VARCHAR,
	amount FLOAT8,
	message VARCHAR,
	issued_at TIMESTAMP,
	type VARCHAR,
	
	CONSTRAINT transaction_user_fk FOREIGN KEY (user_id) REFERENCES public."user" (id),
	CONSTRAINT accountant_fk FOREIGN KEY (accountant_id) REFERENCES public."user" (id),
	
	CONSTRAINT transaction_pk PRIMARY KEY (id)
);





