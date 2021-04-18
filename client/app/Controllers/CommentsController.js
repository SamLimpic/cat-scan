import { ProxyState } from '../AppState.js'
import { commentsService } from '../Services/CommentsService.js'

// Private
function _draw() {

}

// Public
export default class CommentsController {
  constructor() {
    ProxyState.on('comments', _draw)

    // this.getComments() | NOTE >>> should draw when button is clicked right?
  }

  async getComments(id) {
    try {
      document.getElementById(`${id + '-comments'}`).classList.remove('d-none')
      document.getElementById(`${id + '-img'}`).classList.add('d-none')
      await commentsService.getByCatId(id)
    } catch (error) {
      console.error(error)
    }
  }

  async getNewest() {
    try {
      await commentsService.getNewest()
    } catch (error) {
      console.error(error)
    }
  }

  async getOldest() {
    try {
      await commentsService.getOldest()
    } catch (error) {
      console.error(error)
    }
  }

  async getPopular() {
    try {
      await commentsService.getPopular()
    } catch (error) {
      console.error(error)
    }
  }

  async getControversial() {
    try {
      await commentsService.getControversial()
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
