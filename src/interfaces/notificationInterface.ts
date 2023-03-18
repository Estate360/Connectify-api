import mongoose, { Document } from "mongoose";

interface INotifyDoc extends Document {
  userId: mongoose.Types.ObjectId[];
  count: number;
  message: string;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export { INotifyDoc };
