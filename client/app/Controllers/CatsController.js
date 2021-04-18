/* eslint-disable no-console */
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
    ProxyState.on('account', this.getCats)
    ProxyState.on('cats', _draw)
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
      // window.event.preventDefault()
      // const form = window.event.target
      // const newCat = {
      //   // @ts-ignore
      //   body: form.body.value,
      //   // @ts-ignore
      //   imgUrl: form.imgUrl.value
      // } NOTE this section is for form submission
      await catsService.createCat()

      // @ts-ignore
      // form.reset()

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

  async upVote(id) {
    try {
      // const newCat = {
      //   posCount: +1,
      //   voteCount: +1,
      //   disabled: 'disabled'
      // }
      await catsService.upVote(id)
      document.getElementById(`${id + '-neg'}`).classList.add('text-secondary')
      document.getElementById(`${id + '-neg'}`).classList.remove('text-danger')
      document.getElementById(`${id + '-cat'}`).classList.add('d-none')
      document.getElementById(`${id + '-comment'}`).classList.remove('d-none')
    } catch (error) {
      console.error(error)
    }
  }

  async downVote(id) {
    try {
      await catsService.downVote(id)
      document.getElementById(`${id + '-pos'}`).classList.add('text-secondary')
      document.getElementById(`${id + '-pos'}`).classList.remove('text-info')
      document.getElementById(`${id + '-cat'}`).classList.add('d-none')
      document.getElementById(`${id + '-comment'}`).classList.remove('d-none')
    } catch (error) {
      console.error(error)
    }
  }

  async catify(id) {
    try {
      await catsService.catify(id)
    } catch (error) {
      console.error(error)
    }
  }
}
