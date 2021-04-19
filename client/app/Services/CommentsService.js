import { ProxyState } from '../AppState.js'
import Comment from '../Models/Comment.js'
import { api } from './AxiosService.js'

class CommentsService {
  async getComments() {
    const res = await api.get('api/comments')
    // ProxyState.comments = res.data
    ProxyState.comments = res.data.map(c => new Comment(c))
  }

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
    const res = await api.get('api/cats/' + id + '/comments')
    ProxyState.comments = res.data
    ProxyState.comments = res.data.map(c => new Comment(c))
    document.getElementById(`${id + '-comments'}`).classList.remove('d-none')
    document.getElementById(`${id + '-img'}`).classList.add('d-none')
    document.getElementById(`${id + '-body'}`).classList.add('d-none')
    document.getElementById(`${id + '-cat'}`).classList.add('d-none')
    document.getElementById(`${id + '-back'}`).classList.remove('d-none')
  }

  async createComment(id, newComment) {
    const res = await api.post('api/comments', newComment)
    res.data.id = res.data._id
    const comment = new Comment(res.data)
    ProxyState.comments = [...ProxyState.comments, comment]
    document.getElementById(`${id + '-comments'}`).classList.remove('d-none')
    document.getElementById(`${id + '-img'}`).classList.add('d-none')
    document.getElementById(`${id + '-body'}`).classList.add('d-none')
  }

  async deleteComment(id) {
    await api.delete('api/comments/' + id)
    ProxyState.comments = ProxyState.comments.filter(comment => comment.id !== id)
  }

  // TODO needs vote function
}

export const commentsService = new CommentsService()
