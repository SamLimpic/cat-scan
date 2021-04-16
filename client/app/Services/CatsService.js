import { ProxyState } from '../AppState.js'
import Cat from '../Models/Cat.js'

class CatsService {
  async getCats() {
    const res = await api.get('cats')
    ProxyState.cats = res.data
    // ProxyState.cats = res.data.map(c => new Cat(c))
  }

  async createCat(newCat) {
    const res = await api.post('cats', newCat)
    res.data.id = res.data._id
    const cat = new Cat(res.data)
    ProxyState.cats = [...ProxyState.cats, cat]
  }

  async deleteCat(id) {
    await api.delete('cats/' + id)
    ProxyState.cats = ProxyState.cats.filter(cat => cat.id != id)
  }

  // TODO needs vote function
}

export const catsService = new CatsService()
