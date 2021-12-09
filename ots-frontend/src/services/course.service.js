import axios from './axios';

class CourseService {
  static _getOne(course_id) {
    return axios.get('/courses/' + course_id);
  }

  static _getAllByInstructorId(instructor_id) {
    return axios.get('/courses', { params: { instructor_id } });
  }

  static _getAll() {
    return axios.get('/courses');
  }

  static _createOne(data) {
    return axios.post('/courses', data);
  }
}

export default CourseService;
