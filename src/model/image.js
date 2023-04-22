import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  link: {
    type: String,
  },
  blogName: {
    type: String,
  },
});

export default mongoose.model("BlogImages", imageSchema);
