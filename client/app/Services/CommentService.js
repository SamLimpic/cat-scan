import { ProxyState } from '../AppState.js'
import Comment from '../Models/Comment.js'

class CommentsService {
  addComment() {
    ProxyState.values = [...ProxyState.values, new Comment({ title: Math.random() })] // test line
  }
}

export const valuesService = new CommentsService()
