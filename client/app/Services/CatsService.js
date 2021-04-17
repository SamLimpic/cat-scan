import { ProxyState } from '../AppState.js'
import Cat from '../Models/Cat.js'
import { api, catFactApi } from './AxiosService.js'

class CatsService {
  async getCats() {
    const res = await api.get('api/cats')
    // ProxyState.cats = res.data
    ProxyState.cats = res.data.map(c => new Cat(c))
  }

  async createCat() {
    deepai.setApiKey('e6895f90-4ea9-46fb-8938-5c1768425882')

    const url = await deepai.callStandardApi('text2img', {
      text: 'CAT'
    })

    const fact = await catFactApi.get('')

    const newCat = {
      body: fact.data.fact,
      imgUrl: url.output_url
      // accountId: ProxyState.account.id
    }

    console.log(newCat)

    const res = await api.post('api/cats', newCat)
    res.data.id = res.data._id
    const cat = new Cat(res.data)
    ProxyState.cats = [...ProxyState.cats, cat]
  }

  async deleteCat(id) {
    await api.delete('api/cats/' + id)
    ProxyState.cats = ProxyState.cats.filter(cat => cat.id !== id)
  }

  async upVote(id) {
    const cat = ProxyState.cats.find(c => c.id === id)
    cat.posCount++
    cat.voteCount++
    await api.put('api/cats/' + id, cat)
    ProxyState.cats = ProxyState.cats
    console.log(cat)
  }

  async downVote(id) {
    const cat = ProxyState.cats.find(c => c.id === id)
    cat.negCount--
    cat.voteCount--
    await api.put('api/cats/' + id, cat)
    ProxyState.cats = ProxyState.cats
  }
}

export const catsService = new CatsService()
