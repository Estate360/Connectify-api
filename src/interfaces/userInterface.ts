import mongoose, { Document, Model } from "mongoose";

interface IUserDoc extends Document {
  find(arg0: { active: { $ne: boolean } }): unknown;
  name: string;
  role: string;
  posts: mongoose.Types.ObjectId[];
  email: string;
  password: string;
  avatar_url: string;
  passwordConfirm: string;
  passwordResetAt?: Date | number | string;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  active: boolean;
  length: number;
  slug: string;

  comparePassword(
    candIdatePassword: string,
    userPassword: string
  ): Promise<boolean>;
  changedPasswordAfter(JWTTimeStamp: number): boolean;
  correctPasswordResetToken(): string;
}

interface IUserModel extends Model<IUserDoc> {}
export { IUserDoc, IUserModel };
