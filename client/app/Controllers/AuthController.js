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
            <button type="button" class="col-md-2 col-5 btn btn-dark shadow mx-0 px-0"
                onclick="app.catsController.createCat()"><b>Generate "Cat"</b></button>
    <div class="col-md-2 col-6 mx-1">
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
