import { votesService } from '../Services/VotesService'

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

  get VoteColor() {
    if (this.posCount === this.negCount) {
      return 'border-dark'
    } else if (this.posCount > this.negCount) {
      return 'border-success'
    } else { return 'border-danger' }
  }
}

// insert ${this.VoteColor} at point of click
