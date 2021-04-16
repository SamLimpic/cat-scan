import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Vote = new Schema(
  {
    voteBoolean: { type: String, required: true, default: null },
    accountId: { type: ObjectId, ref: ' user ', required: true },
    catId: { type: ObjectId, ref: ' cat ', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Vote
