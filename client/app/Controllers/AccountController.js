import { ProxyState } from '../AppState.js'
import { accountService } from '../Services/AccountService.js'

// Private
function _draw() {
  const data = ProxyState.accounts
  return data
}

// Public
export default class AccountController {
  constructor() {
    ProxyState.on('accounts', _draw)
  }

  addAccount() {
    accountService.addAccount()
  }
}
