import mongoose from "mongoose";

const studentDetailsSchema = mongoose.Schema({
  StNo: { type: Number, unique: true, required: [true, "Please add unique number"]},
  StName: { type: String , required: [true, "Please add Name"]},
  StTel: { type: Number , required: [true, "Please add contact"]},
  StSubject: [{type: mongoose.Schema.Types.ObjectId, ref:'subject_details'}]
});

export default mongoose.model("student_details", studentDetailsSchema);