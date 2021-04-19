import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Value = new Schema(
  {
    body: { type: String, required: true },
    voteBoolean: { type: Boolean, required: true },
    voteCount: { type: Number, required: true },

    voteId: { type: ObjectId, ref: 'Vote', required: true },
    catId: { type: ObjectId, ref: 'Cat', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Value
