import express from "express";
import { subjectDetails, updateSingleSubject,getSubject } from "../controllers/subject.js";
import {multipleUpload} from '../middleware/multer.js';


const router = express.Router();

router.post("/addsubject", multipleUpload, subjectDetails);
router.put("/updatesinglesubject/:id",multipleUpload, updateSingleSubject);
router.get("/getsubject/:id", getSubject);


export default router;