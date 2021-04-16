import { ProxyState } from '../AppState.js'
import { catService } from '../Services/CatService.js'

// Private
function _draw() {
  const data = ProxyState.cats
  return data
}

// Public
export default class CatController {
  constructor() {
    ProxyState.on('cats', _draw)
  }

  addCat() {
    catService.addCat()
  }
}
