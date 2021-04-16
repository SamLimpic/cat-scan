export default class Account {
  constructor(data) {
    this.email = data.email
    this.username = data.username
    this.avatar = data.avatar
  }

  get Template() {
    return /* html */ `
    <span>${this.email}, ${this.username}, ${this.avatar}</span>
      `
  }
}
