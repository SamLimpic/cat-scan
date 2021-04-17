import { ProxyState } from '../AppState.js'
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

                <div class="card ${this.VoteColor} rounded col-11 col-md-3 p-3 shadow mt-3 m-5">
                <div class=" ">

                    <div class="row justify-content-between pr-3 pl-3">
                        <span>o <b>${this.accountId}</b></span>
                        <button type="button" class="btn btn-non shadow-none text-muted"><b>...</b></button>
                    </div>

                    <img class="img-size shadow rounded justify-content-center" src="${this.imgUrl}"
                        alt="cat post">

                    <p class="pt-2">${this.body}</p>

                    <div class="row justify-content-between px-3">
                        <img class="paw " style="cursor: pointer" onclick="app.catsController.upVote()" src="./assets/img/bluepaw.png" alt="sad">
                        <button type="button" onclick="app.commentsController.getComments()" data-toggle="modal" data-target="#view-comments${this.id}" class="btn btn-secondary">Comments</button>
                        <img class="paw" style="cursor: pointer" onclick="app.catsController.downVote()" src="./assets/img/redpaw.png" alt="sad">
                        <button type="button" class="btn shadow btn-primary"><b>+</b></button>
                        <button type="button" class="btn shadow btn-danger"><b>-</b></button>
                    </div>
                </div>
            </div>




            <div class="modal fade" id="view-comments${this.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">

        <div class="modal-content">

        <div>
        <button type="button" class="btn btn-non shadow-none text-info" onclick="app.commentsController.createComment()"><b>+</b></button><button type="button" class="btn btn-non shadow-none text-danger" data-dismiss="modal"><b>x</b></button>
        </div>

            <div class="modal-header" style="align-self: center;">
                <h5 class="modal-title text-dark" id="exampleModalLabel"> ${this.Comments}</h5>
            </div>

        </div>
    </div>
</div>
        `
  }

  get Comments() {
    let ings = ProxyState.Comments.filter(i => i.Id === this.id)
    let template = ''
    ings.forEach(i => template += i.Template)
    return template
  }

  get VoteColor() {
    if (this.posCount === this.negCount) {
      return 'border-dark'
    } else if (this.posCount > this.negCount) {
      return 'border-success'
    } else {
      return 'border-danger'
    }
  }
}
