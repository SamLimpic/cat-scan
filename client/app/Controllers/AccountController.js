import { ProxyState } from '../AppState.js'
import { accountService } from '../Services/AccountService.js'

// Private
function _draw() {
  const data = ProxyState.account
  return data
}

// Public
export default class AccountController {
  constructor() {
    ProxyState.on('accounts', _draw)
  }

  async getAccount() {
    try {
      await accountService.getAccount()
    } catch (error) {
      console.error(error)
    }
  }

  async createAccount() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      const newAccount = {
        // @ts-ignore
        email: form.email.value,
        // @ts-ignore
        username: form.username.value,
        // @ts-ignore
        avatar: form.avatar.value
      }
      await accountService.createAccount(newAccount)

      // @ts-ignore
      form.reset()

      // $('#new-cat-form').modal('hide') | <<< NOTE NOT SURE ABOUT THIS LINE OS I COMMENTED IT OUT
    } catch (error) {
      console.error(error)
    }
  }

  async deleteAccount(id) {
    try {
      accountService.deleteAccount(id)
    } catch (error) {
      console.error(error)
    }
  }
}
