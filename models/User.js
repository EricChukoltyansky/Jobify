import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Please provide last name"],
    default: 'lastName',
    maxlength: 20,
    trim: true,
  }
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
  },
  location: {
    type: String,
    trim: true,
    maxlength: 20,
    minlength: 6,
    default: 'My City'
  },
});

export default mongoose.model('User', UserSchema)
