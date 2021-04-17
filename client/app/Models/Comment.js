export default class Comment {
  constructor(data) {
    this.body = data.body
    this.voteBool = data.voteBool
    this.voteCount = data.voteCount
    this.accountId = data.accountId
    this.catId = data.catId
  }

  get Template() {
    return /* html */ `
        <span>${this.body}, ${this.voteBool}, ${this.voteCount}, ${this.accountId}, ${this.catId},</span>
          `
  }
}


// turnary for comment color `class="${ this.voteBool ? border-success : border-danger}"`