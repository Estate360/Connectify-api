import mongoose, { Schema } from "mongoose";
import { ICommentDoc } from "../interfaces/commentInterface";

const notificationModel = new Schema<ICommentDoc>(
  {
    userId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    postId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    comment: {
      type: String,
      required: true,
    },
    isDeleted: {
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

const Notification = mongoose.model<ICommentDoc>(
  "Notification",
  notificationModel
);
export default Notification;
