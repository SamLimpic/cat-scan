import { ProxyState } from '../AppState.js'
import { catsService } from '../Services/CatsService.js'

// Private
function _draw() {
  const cats = ProxyState.cats
  let template = ''
  cats.forEach(cat => { template += cat.Template })
  document.getElementById('cats').innerHTML = template
}

// Public
export default class CatsController {
  constructor() {
    ProxyState.on('cats', _draw)

    this.getCats()
  }

  async getCats() {
    try {
      await catsService.getCats()
    } catch (error) {
      console.error(error)
    }
  }

  async createCat() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      const newCat = {
        // @ts-ignore
        body: form.body.value,
        // @ts-ignore
        imgUrl: form.imgUrl.value
      }
      await catsService.createCat(newCat)

      // @ts-ignore
      form.reset()

      // $('#new-cat-form').modal('hide') | <<< NOTE NOT SURE ABOUT THIS LINE OS I COMMENTED IT OUT
    } catch (error) {
      console.error(error)
    }
  }

  async deleteCat(id) {
    try {
      catsService.deleteCat(id)
    } catch (error) {
      console.error(error)
    }
  }

  // TODO needs vote function
}
