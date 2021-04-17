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

  upCat(id) {
    const cat = ProxyState.cats.find(c => c.id === id)
    cat.voteCount++
    cat.posCount++
  }

  downCat(id) {
    const cat = ProxyState.cats.find(c => c.id === id)
    cat.voteCount++
    cat.negCount++
  }
}

export const catsService = new CatsService()
