import express from "express";
import { studentDetails, getAllStudentDetails, updateStudentDetails, getAllsubjects, getStudent, updateSingleStudent } from "../controllers/student.js";
import {multipleUpload} from '../middleware/multer.js';


const router = express.Router();

router.get("/getallsubjects/:id", getAllsubjects);
router.get("/getstudent/:id", getStudent);
router.post("/addstudent", multipleUpload, studentDetails);
router.get("/getallstudent", getAllStudentDetails);
router.put("/updatestudent/:id",multipleUpload, updateStudentDetails);
router.put("/updatesinglestudent/:id",multipleUpload, updateSingleStudent);


export default router;