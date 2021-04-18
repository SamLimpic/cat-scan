import { ProxyState } from '../AppState.js'
import { AuthService } from '../Services/AuthService.js'

function drawUser() {
  const user = ProxyState.account
  const userAvatar = avatarTemplate(user)
  const button = authButton(ProxyState.user)

  const template = /* html */ `
    ${userAvatar}
    ${button}
  `
  document.getElementById('authstate').innerHTML = template
}

export class AuthController {
  constructor() {
    ProxyState.on('account', drawUser)
    AuthService.on(AuthService.AUTH_EVENTS.LOADED, drawUser)
    drawUser()
  }

  async login() {
    try {
      await AuthService.loginWithPopup()
    } catch (e) {
      console.error(e)
    }
  }

  logout() {
    try {
      AuthService.logout()
    } catch (e) {
      console.error(e)
    }
  }
}

function authButton(user) {
  if (AuthService.loading) { return '' }
  return ProxyState.user.isAuthenticated
    ? /* html */ `
    <button class="btn btn-lg px-0" onclick="app.authController.logout()"><i class="fas fa-times text-danger voting"></i></button>
  `
    : /* html */ `
    <button class="btn btn-dark" onclick="app.authController.login()">login</button>
  `
}

function avatarTemplate(user) {
  return ProxyState.user.isAuthenticated
    ? /* html */ `
            <button type="button" class="col-md-2 col-4 btn btn-dark shadow mr-auto" data-toggle="modal"
                data-target="#exampleModal">
                Sort Posts
            </button>
    <div class="mr-2">
    ${user.avatar}
    <span class="mx-1 text-center">${user.username}</span>
    </div>`
    : AuthService.loading
      ? /* html */ `
    <div class="skeleton-loader dark avatar"></div>
    <div class="skeleton-loader dark text sm mx-2"></div>`
      : /* html */`
    <div></div>
    `
}
// <img class="rounded-circle " src="${user.picture}" alt="${user.name}" height="30"/>
