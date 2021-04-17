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
                <div class="card p-3 col-11 col-md-3 shadow my-2 " style="width: 18rem;">
                <div class="row">
                    <div class="col-12">
                        <h5 class="card-title">${this.accountId}</h5>
                        <p class="card-text">${this.body}</p>
                    </div>

                </div>
            </div>
            `
  }
}

/* <div class="col-2 voting ">
  <i class="fas fa-plus text-info" style="cursor: pointer"></i>
  <span><b>${this.voteCount}</b></span>
  <i class="fa fa-minus text-danger" style="cursor: pointer"></i>
</div> */

// ${ this.voteBool } ?border - success : border - danger}/
