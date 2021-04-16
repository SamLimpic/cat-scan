import { AuthController } from './Controllers/AuthController.js'
import AccountController from './Controllers/AccountController.js'
import CatsController from './Controllers/CatsController.js'
import VotesController from './Controllers/VotesController.js'
import CommentsController from './Controllers/CommentsController.js'

class App {
  commentsController = new CommentsController();
  votesContoller = new VotesController();
  catsController = new CatsController();
  accountController = new AccountController();
  authController = new AuthController();
}

// @ts-ignore
window.app = new App()
