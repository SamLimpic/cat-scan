export default class Cat {
  constructor(data) {
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.voteCount = data.voteCount
    this.posCount = data.posCount
    this.negCount = data.negCount
    this.accountId = data.accountId
  }

  get Template() {
    return /* html */ `
      <span>${this.body}, ${this.imgUrl}, ${this.voteCount}, ${this.posCount}, ${this.negCount}, ${this.accountId},</span>
        `
  }
}
