import { ProxyState } from '../AppState.js'
import { commentService } from '../Services/CommentService.js'

// Private
function _draw() {
  const data = ProxyState.comments
  return data
}

// Public
export default class CommentController {
  constructor() {
    ProxyState.on('comments', _draw)
  }

  addCat() {
    commentService.addCat()
  }
}
