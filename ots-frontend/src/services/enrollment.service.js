import axios from './axios';

class EnrollmentService {
  static _getAllById(student_id) {
    return axios.get('/enrollments/' + student_id);
  }

  static _getAllStudentInCourse(course_id) {
    return axios.get('/enrollments/student-in-course/' + course_id);
  }

  static _getOne(student_id, course_id) {
    return axios.get('/enrollments', { params: { student_id, course_id } });
  }

  static _createOne(data) {
    return axios.post('/enrollments', data);
  }

  static _updateOne(enrollment_id, data) {
    return axios.put('/enrollments/' + enrollment_id, data);
  }
}

export default EnrollmentService;
