import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Cat = new Schema(
  {
    body: { type: String, required: true },
    imgUrl: { type: String, required: true },
    voteCount: { type: Number, required: true },
    posCount: { type: Number, required: false },
    negCount: { type: Number, required: false },
    accountId: { type: ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Cat
