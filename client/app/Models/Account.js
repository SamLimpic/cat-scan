export default class Account {
  constructor(data) {
    this.email = data.email
    // username is the account email, split into an array at the "@" symbol
    // when we reference the username in our Draw, we'll use "username[0]"
    this.username = data.email.split('@')[0]
    this.avatar = `<img class="m-2 p-1 paw rounded-circle border border-dark" src="https://robohash.org/${this.username}?set=set4"`
  }

  get Template() {
    return /* html */ `
    <span>${this.email}, ${this.username}, ${this.avatar}</span>
      `
  }
}
