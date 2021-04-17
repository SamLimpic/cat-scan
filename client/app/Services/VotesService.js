import { ProxyState } from '../AppState.js'
import { api } from './AxiosService.js'
import Vote from '../Models/Vote.js'

class VotesService {
  async getVotes() {
    const res = await api.get('api/votes')
    ProxyState.votes = res.data
    // ProxyState.votes = res.data.map(c => new Vote(c))
  }

  async createVote(id) {
    const res = await api.post('api/votes', id)
    res.data.id = res.data._id
    const vote = new Vote(res.data)
    ProxyState.votes = [...ProxyState.votes, vote]
  }
}
export const votesService = new VotesService()
