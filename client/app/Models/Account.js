export default class Account {
  constructor(data) {
    this.email = data.email
    // username is the account email, split into an array at the "@" symbol
    // when we reference the username in our Draw, we'll use "username[0]"
    this.username = data.email.split('@')
    this.avatar = data.avatar
  }

  get Template() {
    return /* html */ `
    <span>${this.email}, ${this.username}, ${this.avatar}</span>
      `
  }
}
