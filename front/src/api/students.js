import axios from 'axios'


const API = axios.create({ baseURL: "http://localhost:5000/api/student", timeout: 40000, headers: { "Content-Type": "multipart/form-data" } });

export const createStudent = (newStudent) => API.post('/addstudent', newStudent);
export const updatesinglestudent = (id, formData) => API.put(`/updatesinglestudent/${id}`, formData);
export const fetchAllStudent = () => API.get('/getallstudent');
export const fetchSubjectDetails = (id) => API.get(`/getallsubjects/${id}`);
export const fetchstudent = (id) => API.get(`/getstudent/${id}`);