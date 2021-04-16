import { ProxyState } from '../AppState.js'
import Cat from '../Models/Cat.js'

class CatsService {
  addCat() {
    ProxyState.values = [...ProxyState.values, new Cat({ title: Math.random() })] // test line
  }
}

export const valuesService = new CatsService()
