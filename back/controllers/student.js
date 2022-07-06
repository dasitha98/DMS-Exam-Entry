import StudentDetailsModal from "../models/student.js";
import subject_details from "../models/subject.js";
import SubjectDetailsModal from "../models/subject.js";
import mongoose from 'mongoose';






  export const studentDetails = async (req, res) => {
    const details  = req.body;

    try {
        const studentDetails = await StudentDetailsModal.create({ ...details})
        console.log(studentDetails);

        res.status(200).json({studentDetails, message: "student added" })
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error.message })
    }
  }


  export const getAllsubjects = async (req, res) => {

    try {
      const allOrderDetails = await StudentDetailsModal.find({StNo: req.params.id}).populate({path: 'StSubject', model: subject_details});
      
      res.status(200).json(allOrderDetails[0].StSubject)
    } catch (error) {
      console.log(error)
      res.status(404).json({ message: error.message })
    }
  }

  export const getStudent = async (req, res) => {

    try {
      const allOrderDetails = await StudentDetailsModal.find({StNo: req.params.id}).populate({path: 'StSubject', model: subject_details});
      
      res.status(200).json(allOrderDetails[0])
    } catch (error) {
      console.log(error)
      res.status(404).json({ message: error.message })
    }
  }
  


  // export const getAllStudentDetails = async (req, res) => {

  //   try {
      
  //     const allOrderDetails = await StudentDetailsModal.find({StNo: 74});

  //     res.status(200).json(allOrderDetails[0]._id)
  //   } catch (error) {
  //     console.log(error)
  //     res.status(404).json({ message: error.message })
  //   }
  // }

  export const getAllStudentDetails = async (req, res) => {

    try {
      
      const allOrderDetails = await StudentDetailsModal.find({}).populate({path: 'StSubject', model: subject_details});

      res.status(200).json(allOrderDetails)
    } catch (error) {
      console.log(error)
      res.status(404).json({ message: error.message })
    }
  }



  export const updateStudentDetails = async (req, res) => {
    const details = await StudentDetailsModal.findByIdAndUpdate(req.params.id);
    
    if (details){
      const {StSubject} = req.body;

      const detail = await StudentDetailsModal.findByIdAndUpdate(req.params.id, { $push: { StSubject: StSubject  } });
      res.status(201).json(detail);
  
    }else{
      res.status(404).send({message: 'student cannot update'});
    }
  }


    export const updateSingleStudent = async (req, res) => {
    const student = req.body;
    const {StNo} = req.body;

    const result = await StudentDetailsModal.find({StNo: StNo})

    if(result){
      try {
        const updatedOrderDetails = await StudentDetailsModal.findByIdAndUpdate(result[0]._id, { ...student}, { new: true })
        console.log(updatedOrderDetails)

        res.json(updatedOrderDetails)
      } catch (error) {
        console.log(error)
        res.status(409).json({ message: error.message })
      }
    }else{
      return res.status(404).send('No Student found');
    }

  }

  // export const updateStudentDetails = async (req, res) => {
  //   const details = await StudentDetailsModal.findByIdAndUpdate(req.params.id);
    
  //   if (details){
  //     const {StSubject} = req.body;

  //     const detail = await StudentDetailsModal.findByIdAndUpdate(req.params.id, { $push: { StSubject: StSubject  } });
  //     res.status(201).json(detail);
  
  //   }else{
  //     res.status(404).send({message: 'student cannot update'});
  //   }
  // }


//   export const updateStudentDetails = async (req, res) => {
//     const details = await StudentDetailsModal.findById(req.params.id);

//     if (details){
//       const {StSubject} = req.body;
//       console.log(req.body);

      
  
//       details.StSubject= StSubject;
  
//     //   const updatedetails = await details.save();
//     //   console.log(updatedetails);
//       res.status(201).json(updatedetails);
  
//     }else{
//       res.status(404).send({message: 'student cannot update'});
//     }
//   }




// export const orderDetails = async (req, res) => {
//     const details  = req.body;
  
//     try {
//         const orderDetails = await OrderDetailsModal.insertMany({ ...details, userId: details.userId, paymentDetailsId: details.paymentDetailsId })
  
//         res.status(200).json({orderDetails, message: "orderDetails added" })
//     } catch (error) {
//         console.log(error);
//         res.status(409).json({ message: error.message })
//     }
//   }




//   export const getAllOrderDetails = async (req, res) => {

//     try {
      
//     const allOrders = await OrderDetailsModal.find({}).select('userId');

//     var userIdArray = [];

//     for (let i = 0; i < allOrders.length; i++) {
//       userIdArray.push(allOrders[i].userId)
//     }


//     channel.sendToQueue(
//       "USER",
//       Buffer.from(
//           JSON.stringify({
//             userIdArray,
//           })
//       )
//     );


//       const allOrderDetails = await OrderDetailsModal.find().populate({path: 'paymentDetailsId', model: payent_details})

//       var newObject = {allOrderDetails, userDetails: alluser.allusers}

//       res.status(200).json(newObject)
//     } catch (error) {
//       console.log(error)
//       res.status(404).json({ message: error.message })
//     }
//   }



//   export const getOrderDetails = async (req, res) => {

//     try {

//       const userid = await OrderDetailsModal.findById(req.params.id)

//       const userID = userid.userId;
  
//       channel.sendToQueue(
//         "USER",
//         Buffer.from(
//             JSON.stringify({
//               userID,
//             })
//         )
//       );

//       const allOrderDetails = await OrderDetailsModal.findById(req.params.id).populate({path: 'paymentDetailsId', model: payent_details})
    
//       var newObject = {allOrderDetails, userDetails: result.result}

//       console.log("newObject",newObject);

//       res.status(200).json(newObject)
//     } catch (error) {
//       res.status(404).json({ message: error.message })
//     }
//   }


//   export const deleteOrderDetails = async (req, res) => {
//     const { id } = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Order Detail found')
//     try {
//       const result = await OrderDetailsModal.findByIdAndDelete( id )

//       res.json({result, message: "Deleted successfully " })
//     } catch (error) {
//       console.log(error);
//       res.status(402).json({ message: error.message })
//     }
//   }


//   export const updateOrderDetails = async (req, res) => {
//     const order = req.body;
//     if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).send('No Order Detail found')
  
//     const result = await OrderDetailsModal.findById(req.params.id)

//     if(result){
//       try {
//         const updatedOrderDetails = await OrderDetailsModal.findByIdAndUpdate(req.params.id, { ...order}, { new: true })
//         res.json(updatedOrderDetails)
//       } catch (error) {
//         console.log(error)
//         res.status(409).json({ message: error.message })
//       }
//     }else{
//       return res.status(404).send('No Order Detail found');
//     }

//   }
