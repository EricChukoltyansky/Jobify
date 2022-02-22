import mongoose from "mongoose";
import { connect } from "react-redux";

const connectDB = (url) => {
  return mongoose.connect(url);
};

export default connectDB;
