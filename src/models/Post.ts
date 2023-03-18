import mongoose, { Schema } from "mongoose";
import { IPostDoc } from "../interfaces/postInterface";

const postModel = new Schema<IPostDoc>(
  {
    userId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    content: [
      {
        type: String,
        required: true,
      },
    ],
    postTag: {
      type: String,
      enum: [],
      default: "trend",
      lowercase: true,
      required: true,
    },
    image_url: {
      type: String,
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

const Post = mongoose.model<IPostDoc>("Post", postModel);
export default Post;
