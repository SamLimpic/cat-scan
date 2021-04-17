import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CatsService {
  async getAll(query = {}) {
    return await dbContext.Cats.find(query)
      .populate('account', 'userName')
      .populate('body')
      .populate('imgUrl')
  }

  async post(body) {
    return await dbContext.Cats.create(body)
  }

  async edit(body) {
    const data = await dbContext.Cats.findOneAndUpdate({ _id: body.id })
    if (!data) {
      throw new BadRequest('Invalid Id')
    }
    return data
  }

  async delete(id) {
    const data = await dbContext.Cats.findOneAndDelete({ _id: id })
    if (!data) {
      throw new BadRequest('Invalid Id')
    }
    return 'Successfully Deleted'
  }
}

export const catsService = new CatsService()
