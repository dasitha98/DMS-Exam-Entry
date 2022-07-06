import SubjectDetailsModal from "../models/subject.js";
import StudentDetailsModal from "../models/student.js";
import mongoose from 'mongoose';



// export const subjectDetails = async (req, res) => {
//     const details  = req.body;
//     console.log(details);

//     try {
//         const subjectDetails = await SubjectDetailsModal.create({ ...details})

//         res.status(200).json({subjectDetails, message: "subject added" })
//     } catch (error) {
//         console.log(error);
//         res.status(409).json({ message: error.message })
//     }
//   }

    export const getSubject = async (req, res) => {

        try {
        const subject = await SubjectDetailsModal.findById(req.params.id);
        
        res.status(200).json(subject)
        } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message })
        }
    }

  export const updateSingleSubject = async (req, res) => {
    const subject = req.body;

      try {
        const updatedOrderDetails = await SubjectDetailsModal.findByIdAndUpdate(req.params.id, { ...subject}, { new: true })
        console.log(updatedOrderDetails)

        res.json(updatedOrderDetails)
      } catch (error) {
        console.log(error)
        res.status(409).json({ message: error.message })
      }
  }

  export const subjectDetails = async (req, res) => {
    const details  = req.body;
    const {StNo}  = req.body;
  
    try {
        const subjectDetails = await SubjectDetailsModal.create({ ...details})
        const subid = subjectDetails._id.toString();
        const allOrderDetails = await StudentDetailsModal.find({StNo: StNo});
        const stid = allOrderDetails[0]._id.toString();
        const detail = await StudentDetailsModal.findByIdAndUpdate(stid, { $push: { StSubject: subid  } });
  
  
        res.status(200).json({subjectDetails, message: "subject added" })
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error.message })
    }
  }


