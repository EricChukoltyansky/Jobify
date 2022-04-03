import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, "Please provide name"],
    maxlength: 20,
  },
  position: {
    type: String,
    required: [true, "Please provide position"],
    maxlength: 100,
  },
  status: {
    type: String,
    enum: ["interview", "pending", "declined"],
    default: "pending",
  },
});
