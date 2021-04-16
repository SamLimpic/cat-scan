import { ProxyState } from '../AppState.js'
import Vote from '../Models/Vote.js'

class VotesService {
  addVote() {
    ProxyState.values = [...ProxyState.values, new Vote({ title: Math.random() })] // test line
  }
}

export const valuesService = new VotesService()
