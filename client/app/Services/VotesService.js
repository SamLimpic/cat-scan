import { ProxyState } from '../AppState.js'
import { api } from './AxiosService.js'
// import Vote from '../Models/Vote.js'

class VotesService {
  async getVotes() {
    const res = await api.get('api/votes')
    ProxyState.votes = res.data
    // ProxyState.votes = res.data.map(c => new Vote(c))
  }
}

export const votesService = new VotesService()
