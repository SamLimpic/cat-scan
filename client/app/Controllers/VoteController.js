import { ProxyState } from '../AppState.js'
import { voteService } from '../Services/VoteService.js'

// Private
function _draw() {
  const data = ProxyState.votes
  return data
}

// Public
export default class VoteController {
  constructor() {
    ProxyState.on('votes', _draw)
  }

  addCat() {
    voteService.addCat()
  }
}
