import { ProxyState } from '../AppState.js'

export default class Comment {
  constructor(data) {
    this.body = data.body
    // this.voteBool = data.voteBool
    this.voteCount = data.voteCount
    this.accountId = data.accountId
    this.catId = data.catId
  }

  get Template() {
    const username = ProxyState.account.username

    return /* html */ `
              <div class="card shadow bg-secondary text-light py-1 my-2 mx-1">
                <div class="row align-items-center pl-2">
                    <div class="col-12">
                       <p class="text-left pb-0 mb-0"><b>${username}</b></p>
                    </div>
                </div>
                <div class="row align-items-center pl-2">
                    <div class="col-12">
                        <p class="text-left pt-0 my-0">${this.body}</p>
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
