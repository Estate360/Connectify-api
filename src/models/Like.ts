import mongoose, { Schema } from "mongoose";
import { ILike } from "../interfaces/likeInterface";

const likeModel = new Schema<ILike>(
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
    like: {
      type: Number,
      default: 0,
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

const Like = mongoose.model<ILike>("Like", likeModel);
export default Like;
