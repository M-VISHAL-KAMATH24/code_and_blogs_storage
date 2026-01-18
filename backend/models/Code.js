import mongoose from "mongoose";

const codeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    code: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Code = mongoose.model("Code", codeSchema);

export default Code;
