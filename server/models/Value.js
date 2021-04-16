import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Comment = new Schema(
  {
    body: { type: String, required: true },
    voteBoolean: { type: Boolean, required: true },
    voteCount: { type: Number, required: true },

    voteId: { type: ObjectId, ref: ' vote ', required: true },
    catId: { type: ObjectId, ref: ' cat ', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Comment
