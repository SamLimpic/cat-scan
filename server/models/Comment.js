import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Comment = new Schema(
  {
    body: { type: String, required: true },
    voteCount: { type: Number, required: true, default: 0 },
    // voteBool: { type: Boolean, ref: 'Vote', required: true },
    accountId: { type: String, ref: 'Account', required: true },
    catId: { type: String, ref: 'Cat', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Comment.virtual('creator', {
  localField: 'accountId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Comment
