import { ProxyState } from '../AppState.js'
import { commentsService } from '../Services/CommentsService.js'

// Private
function _draw() {

}

// Public
export default class CommentsController {
  constructor() {
    ProxyState.on('account', this.getComments)
    ProxyState.on('comments', _draw)

    // this.getComments() | NOTE >>> should draw when button is clicked right?
  }

  async revealComments(id) {
    try {
      // document.getElementById(`${id + '-comments'}`).classList.remove('d-none')
      // document.getElementById(`${id + '-img'}`).classList.add('d-none')
      // document.getElementById(`${id + '-body'}`).classList.add('d-none')
      // document.getElementById(`${id + '-back'}`).classList.remove('d-none')
      await commentsService.getByCatId(id)
    } catch (error) {
      console.error(error)
    }
  }

  hideComments(id) {
    document.getElementById(`${id + '-comment'}`).classList.remove('d-none')
    document.getElementById(`${id + '-back'}`).classList.add('d-none')
    document.getElementById(`${id + '-comments'}`).classList.add('d-none')
    document.getElementById(`${id + '-img'}`).classList.remove('d-none')
    document.getElementById(`${id + '-body'}`).classList.remove('d-none')
  }

  async getComments() {
    try {
      await commentsService.getComments()
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

  async createComment(id) {
    try {
      window.event.preventDefault()
      const form = window.event.target
      const newComment = {
        // @ts-ignore
        body: form.body.value,
        catId: id
      }
      await commentsService.createComment(id, newComment)

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
