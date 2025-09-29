import mongoose from "mongoose";
const { Schema } = mongoose;
// generating schema for form

const formSchema = new Schema(
  {
    name: String,
    email: String,
    subject: String,
    message: String,
  },
  { timestamps: true }
);
const Form = mongoose.model("Form", formSchema);

export default Form;
