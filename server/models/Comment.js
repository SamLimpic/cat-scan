import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Post = new Schema(
  {
    body: { type: String, required: true },
    voteCount: { type: Number, required: true, default: 0 },
    voteBoolean: { type: ObjectId, ref: 'Vote', required: true },
    accountId: { type: String, ref: 'Account', required: true },
    catId: { type: String, ref: 'Cat', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Post.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Post
