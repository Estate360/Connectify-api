import mongoose, { Document } from "mongoose";

interface ICommentDoc extends Document {
  userId: mongoose.Types.ObjectId[];
  postId: mongoose.Types.ObjectId[];
  comment: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export { ICommentDoc };
