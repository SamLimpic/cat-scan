export default class Vote {
  constructor(data) {
    this.voteBool = data.voteBool
    this.accountId = data.accountId
    this.catId = data.catId
  }

  get Template() {
    return /* html */ `
          <span>${this.voteBool}, ${this.accountId}, ${this.catId},</span>
            `
  }
}
