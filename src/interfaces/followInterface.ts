import mongoose, { Document } from "mongoose";

interface IFollow extends Document {
  followId: mongoose.Types.ObjectId[];
  followingId: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

export { IFollow };
