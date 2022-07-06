import mongoose from "mongoose";

const subjectDetailsSchema = mongoose.Schema({
  SuName: { type: String, required: [true, "Please add Subject Name"]},
  SuGrade: { type: String, required: [true, "Please add Grade"]},
  SuMark: { type: Number, required: [true, "Please add Mark"]}
});

export default mongoose.model("subject_details", subjectDetailsSchema);