import { dbContext } from '../db/DbContext'

class VotesService {
  async getAll(query = {}) {
    return await dbContext.Votes.find(query)
  }

  async post(body) {
    return await dbContext.Votes.create(body)
  }
}

export const votesService = new VotesService()
