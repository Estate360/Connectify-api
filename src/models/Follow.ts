import mongoose, { Schema } from "mongoose";
import { IFollow } from "../interfaces/followInterface";

const followModel = new Schema<IFollow>(
  {
    followId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    followingId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
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

const Follow = mongoose.model<IFollow>("Follow", followModel);
export default Follow;
