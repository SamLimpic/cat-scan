import { ProxyState } from '../AppState.js'
import { votesService } from '../Services/VotesService.js'

// Private
function _draw() {
  const data = ProxyState.votes
  return data
}

// Public
export default class VotesController {
  constructor() {
    ProxyState.on('votes', _draw)
  }

  async getVotes() {
    try {
      await votesService.getVotes()
    } catch (error) {
      console.error(error)
    }
  }

  async createVote(id) {
    try {
      votesService.createVote(id)
    } catch (error) {
      console.error(error)
    }
  }
}
