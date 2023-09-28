import mongoose from "mongoose";

const ContentCreationSchema = new mongoose.Schema({
  Videos: [{ title: String, url: String }],
  Content: String,
});

const ContentCreation =
  mongoose.models.ContentCreation ||
  mongoose.model("ContentCreation", ContentCreationSchema);
export default ContentCreation;
