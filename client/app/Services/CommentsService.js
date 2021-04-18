import { ProxyState } from '../AppState.js'
import Comment from '../Models/Comment.js'
import { api } from './AxiosService.js'

class CommentsService {
  getControversial() {
    throw new Error('Method not implemented.')
  }

  getPopular() {
    throw new Error('Method not implemented.')
  }

  getOldest() {
    throw new Error('Method not implemented.')
  }

  getNewest() {
    throw new Error('Method not implemented.')
  }

  async getByCatId(id) {
    const res = await api.get('api/cats/' + id + 'comments')
    ProxyState.comments = res.data
    ProxyState.comments = res.data.map(c => new Comment(c))
  }

  async createComment(newComment) {
    const res = await api.post('api/comments', newComment)
    res.data.id = res.data._id
    const comment = new Comment(res.data)
    ProxyState.comments = [...ProxyState.comments, comment]
  }

  async deleteComment(id) {
    await api.delete('api/comments/' + id)
    ProxyState.comments = ProxyState.comments.filter(comment => comment.id !== id)
  }

  // TODO needs vote function
}

export const commentsService = new CommentsService()
