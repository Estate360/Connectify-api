import mongoose, { Schema } from "mongoose";
import { INotifyDoc } from "../interfaces/notificationInterface";

const notificationModel = new Schema<INotifyDoc>(
  {
    userId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    count: {
      type: Number,
      default: 0,
    },
    message: { type: String },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Notification = mongoose.model<INotifyDoc>(
  "Notification",
  notificationModel
);
export default Notification;
