import mongoose, { Schema } from "mongoose";
import slugify from "slugify";
import { IUserDoc, IUserModel } from "../interfaces/userInterface";

const userSchema = new Schema<IUserDoc, IUserModel>(
  {
    name: {
      type: String,
      required: [true, "Please input your name"],
    },
    email: {
      type: String,
      required: [true, "Please input your email"],
      unique: true,
      lowercase: true,
    },
    avatar_url: {
      type: String,
      default: "default.jpg",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    password: {
      type: String,
      required: [true, "Please input your password"],
      minlength: 8,
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please confirm your password "],
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    passwordResetAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
    slug: { type: String },
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

userSchema.pre<IUserDoc>("save", function (next) {
  // console.log(this);
  this.slug = slugify(this.name, { lower: false });
  next();
});

const User = mongoose.model<IUserDoc, IUserModel>("User", userSchema);
export default User;
