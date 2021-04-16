import { ProxyState } from '../AppState.js'
import { commentsService } from '../Services/CommentsService.js'

// Private
function _draw() {
  const comments = ProxyState.comments
  let template = ''
  comments.forEach(comment => { template += comment.Template })
  document.getElementById('comments').innerHTML = template
}

// Public
export default class CommentsController {
  constructor() {
    ProxyState.on('comments', _draw)

    // this.getComments() | NOTE >>> should draw when button is clicked right?
  }

  async getComments() {
    try {
      await commentsService.getComments()
    } catch (error) {
      console.error(error)
    }
  }

  async createComment() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      const newComment = {
        // @ts-ignore
        body: form.body.value
      }
      await commentsService.createComment(newComment)

      // @ts-ignore
      form.reset()

      // $('#new-comment-form').modal('hide') | <<< NOTE NOT SURE ABOUT THIS LINE OS I COMMENTED IT OUT
    } catch (error) {
      console.error(error)
    }
  }

  async deleteComment(id) {
    try {
      commentsService.deleteComment(id)
    } catch (error) {
      console.error(error)
    }
  }

  // TODO needs vote function
}
