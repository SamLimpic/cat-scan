import { ProxyState } from '../AppState.js'
import Comment from '../Models/Comment.js'
import { api } from './AxiosService.js'

class CommentsService {
  async getComments() {
    const res = await api.get('comment')
    ProxyState.comments = res.data
    // ProxyState.comments = res.data.map(c => new Comment(c))
  }

  async createComment(newComment) {
    const res = await api.post('comment', newComment)
    res.data.id = res.data._id
    const comment = new Comment(res.data)
    ProxyState.comments = [...ProxyState.comments, comment]
  }

  async deleteComment(id) {
    await api.delete('comment/' + id)
    ProxyState.comments = ProxyState.comments.filter(comment => comment.id !== id)
  }

  // TODO needs vote function
}

export const commentsService = new CommentsService()
