import mongoose from "mongoose";

const MediaSchema = new mongoose.Schema({
  title: { type: String, require: true },
  filePath: { type: String, require: true },
  customData: { type: mongoose.Schema.Types.Mixed },
});

const Media = mongoose.models.Media || mongoose.model("Media", MediaSchema);
export default Media;
