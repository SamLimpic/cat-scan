import { ProxyState } from '../AppState.js'
import Cat from '../Models/Cat.js'
import { api } from './AxiosService.js'

class CatsService {
  async getCats() {
    const res = await api.get('api/cats')
    ProxyState.cats = res.data
    // ProxyState.cats = res.data.map(c => new Cat(c))
  }

  async createCat(newCat) {
    const res = await api.post('api/cats', newCat)
    res.data.id = res.data._id
    const cat = new Cat(res.data)
    ProxyState.cats = [...ProxyState.cats, cat]
  }

  async deleteCat(id) {
    await api.delete('api/cats/' + id)
    ProxyState.cats = ProxyState.cats.filter(cat => cat.id !== id)
  }

  // TODO needs vote function
}

export const catsService = new CatsService()
