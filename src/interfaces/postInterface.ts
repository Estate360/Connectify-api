import mongoose, { Document } from "mongoose";

interface IPostDoc extends Document {
  userId: mongoose.Types.ObjectId[];
  postTag: string;
  content: string[];
  image_url: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export { IPostDoc };
