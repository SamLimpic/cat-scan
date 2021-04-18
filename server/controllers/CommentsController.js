import { commentsService } from '../services/CommentsService'
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class CommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .get('', this.getAll)
      .get('/:catId', this.getByCatId)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.post)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      const comments = await commentsService.getAll(req.query)
      res.send(comments)
    } catch (error) {
      next(error)
    }
  }

  async getByCatId(req, res, next) {
    try {
      const comments = await commentsService.find({ catId: req.params.id })
      return res.send(comments)
    } catch (error) {
      next(error)
    }
  }

  async post(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorId = req.userInfo.id
      const comment = await commentsService.post(req.body)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const data = await commentsService.edit(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      const data = await commentsService.delete(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
