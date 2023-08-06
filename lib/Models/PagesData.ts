import mongoose from "mongoose";

const pagesDataSchema = new mongoose.Schema({
  title: { type: String, require: true },
  category: String,
  content: { type: String, require: true },
  imgUrl: String,
});

const PagesData =
  mongoose.models.PagesData || mongoose.model("PagesData", pagesDataSchema);
export default PagesData;
