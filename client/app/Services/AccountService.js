import { ProxyState } from '../AppState.js'
import Account from '../Models/Account.js'
import { api } from './AxiosService.js'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('api/account')
      ProxyState.account = res.data
      return res.data
    } catch (error) {
      console.error(error)
    }
  }

  async createAccount(newAccount) {
    const res = await api.post('api/account', newAccount)

    res.data.id = res.data._id
    const account = new Account(res.data)
    ProxyState.account = account
  }

  async deleteAccount(id) {
    await api.delete('api/account/' + id)
    ProxyState.account = ProxyState.account.filter(account => account.id !== id)
  }

  // change avatar?
  // change color theme?
}

export const accountService = new AccountService()
