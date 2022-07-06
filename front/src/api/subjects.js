import axios from 'axios'


const API = axios.create({ baseURL: "http://localhost:5000/api/subject", timeout: 40000, headers: { "Content-Type": "multipart/form-data" } });

export const createSubject = (newSubject) => API.post('/addsubject', newSubject);
export const updatesinglesubject = (id, formData) => API.put(`/updatesinglesubject/${id}`, formData);
export const fetchsubject = (id) => API.get(`/getsubject/${id}`);
