import { ProxyState } from '../AppState.js'
import Vote from '../Models/Vote.js'

class VotesService {
  async getVote() {
    const res = await api.get('votes')
    ProxyState.votes = res.data
    // ProxyState.votes = res.data.map(c => new Vote(c))
  }
}

export const votesService = new VotesService()
