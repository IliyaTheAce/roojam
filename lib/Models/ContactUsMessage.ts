import mongoose from "mongoose";

const ContactUsMessageSchema = new mongoose.Schema({
  title: { type: String, require: true },
  content: { type: String, require: true },
  phone: { type: String, require: true },
  composer: { type: String, require: true },
  email: { type: String, require: true },
  time: { type: Date, require: true },
  read: { type: Boolean, require: false },
  replied: { type: Boolean, require: false },
});

const ContactUsMessage =
  mongoose.models.ContactUsMessage ||
  mongoose.model("ContactUsMessage", ContactUsMessageSchema);
export default ContactUsMessage;
