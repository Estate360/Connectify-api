import mongoose, { Document } from "mongoose";

interface ILike extends Document {
  userId: mongoose.Types.ObjectId[];
  postId: mongoose.Types.ObjectId[];
  like: number;
  createdAt: Date;
  updatedAt: Date;
}

export { ILike };
