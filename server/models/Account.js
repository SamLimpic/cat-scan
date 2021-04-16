import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Account = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    userName: { type: String },
    avatar: [{ type: String, unique: true }],
    _id: { type: String, required: true }
  },
  { timestamps: true, _id: false, toJSON: { virtuals: true } }
)

export default Account
