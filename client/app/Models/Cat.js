
export default class Cat {
  constructor(data) {
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.voteCount = this.posCount + this.negCount
    this.posCount = data.posCount
    this.negCount = data.negCount
    this.accountId = data.accountId
  }

  get Template() {
    return /* html */ `

                <div class="card rounded col-11 col-md-3 p-3 shadow mt-3 m-5">
                <div class=" ">

                    <div class="row justify-content-between pr-3 pl-3">
                        <span>o <b>${this.accountId}</b></span>
                        <button type="button" class="btn btn-non shadow-none text-muted"><b>...</b></button>
                    </div>

                    <img class="img-size shadow rounded justify-content-center" src="${this.imgUrl}"
                        alt="cat post">

                    <p class="pt-2">${this.body}</p>

                    <div class="row justify-content-between px-3">
                        <img class="paw " style="cursor: pointer" src="./assets/img/bluepaw.png" alt="sad">
                        <img class="paw" style="cursor: pointer" src="./assets/img/redpaw.png" alt="sad">
                        <!-- <button type="button" class="btn shadow btn-primary"><b>+</b></button>
                        <button type="button" class="btn shadow btn-danger"><b>-</b></button> -->
                    </div>
                </div>
            </div>
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
