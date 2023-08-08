import mongoose from "mongoose";

const ContactUsMessageSchema = new mongoose.Schema({
  title: { type: String, require: true },
  category: String,
  content: { type: String, require: true },
  imgUrl: String,
});

const ContactUsMessage =
  mongoose.models.ContactUsMessage ||
  mongoose.model("ContactUsMessage", ContactUsMessageSchema);
export default ContactUsMessage;
