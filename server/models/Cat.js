import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Cat = new Schema(
  {
    body: { type: String, required: true },
    imgUrl: { type: String, required: true },
    voteCount: { type: Number, required: true, default: 0 },
    posCount: { type: Number, required: false, default: 0 },
    negCount: { type: Number, required: false, default: 0 },
    accountId: { type: ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Cat
