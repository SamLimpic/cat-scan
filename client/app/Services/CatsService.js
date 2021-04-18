/* eslint-disable no-undef */
/* eslint-disable no-self-assign */
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
    // @ts-ignore
    deepai.setApiKey('e6895f90-4ea9-46fb-8938-5c1768425882')

    // @ts-ignore
    const url = await deepai.callStandardApi('text2img', {
      text: 'CAT'
    })

    const fact = await catFactApi.get('')

    const newCat = {
      body: fact.data.fact,
      imgUrl: url.output_url
      // accountId: ProxyState.account.id
    }
    const res = await api.post('api/cats', newCat)
    res.data.id = res.data._id
    const cat = new Cat(res.data)
    ProxyState.cats = [...ProxyState.cats, cat]
  }

  async catify(id) {
    // @ts-ignore
    deepai.setApiKey('e6895f90-4ea9-46fb-8938-5c1768425882')
    const cat = ProxyState.cats.find(cat => cat.id === id)

    // @ts-ignore
    // const resp = await deepai.callStandardApi('fast-style-transfer', {
    //   image: `${cat.imgUrl}`,
    //   style: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/ginger-scottish-fold-close-up-cat-with-yellow-eyes-domestic-cat-pets-scottish-fold-ginger-cat-cute-a-artspace.jpg'
    // })

    // @ts-ignore
    const resp = await deepai.callStandardApi('deepdream', {
      image: `${cat.imgUrl}`
    })

    const newCat = {
      body: cat.body,
      imgUrl: resp.output_url,
      posCount: 0,
      negCount: 0,
      voteCount: 0
    }
    await api.put('api/cats/' + id, newCat)
    this.getCats()
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
