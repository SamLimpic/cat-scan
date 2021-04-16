import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CommentsService {
  async getAll(query = {}) {
    return await dbContext.Comments.find(query)
      .populate('account', 'userName')
      .populate('body')
      .populate('imgUrl')
  }

  async post(body) {
    return await dbContext.Comments.create(body)
  }

  async edit(body) {
    let data = await dbContext.Comments.findOneAndUpdate({ _id: body.id })
    if (!data) {
      throw new BadRequest('Invalid Id')
    }
    return data
  }

  async delete(id) {
    let data = await dbContext.Comments.findOneAndDelete({ _id: id })
    if (!data) {
      throw new BadRequest('Invalid Id')
    }
    return 'Successfully Deleted'
  }
}

export const commentsService = new CommentsService()
