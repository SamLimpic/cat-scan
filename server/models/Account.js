import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Account = new Schema(
  {
    email: { type: String, lowercase: true, unique: true },
    userName: { type: String, required: true },
    avatar: [{ type: String, unique: true }],
    _id: { type: String, required: true }
  },
  { timestamps: true, _id: false, toJSON: { virtuals: true } }
)

export default Account
