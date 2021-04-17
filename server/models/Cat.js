import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Cat = new Schema(
  {
    body: { type: String, required: true },
    imgUrl: { type: String, required: true },
    voteCount: { type: Number, required: true, default: 0 },
    posCount: { type: Number, required: true, default: 0 },
    negCount: { type: Number, required: true, default: 0 },
    accountId: { type: String, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Cat.virtual('creator', {
  localField: 'accountId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

export default Cat
