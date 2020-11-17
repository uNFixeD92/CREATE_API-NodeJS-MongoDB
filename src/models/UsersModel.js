import mongoose from "mongoose";

const userModelSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export default mongoose.model("ModelUsuario", userModelSchema);
