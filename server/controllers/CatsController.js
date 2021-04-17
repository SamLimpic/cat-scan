import { catsService } from '../services/CatsService'
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class CatsController extends BaseController {
  constructor() {
    super('api/cats')
    this.router
      .get('', this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.post)
      .delete('/:id', this.delete)
      .put('/:id', this.edit)
  }

  async getAll(req, res, next) {
    try {
      const cats = await catsService.getAll(req.query)
      res.send(cats)
    } catch (error) {
      next(error)
    }
  }

  async post(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.accountId = req.userInfo.id
      const cat = await catsService.post(req.body)
      res.send(cat)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const data = await catsService.edit(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      const data = await catsService.delete(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
