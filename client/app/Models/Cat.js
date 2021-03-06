/* eslint-disable no-return-assign */
/* eslint-disable indent */

import { ProxyState } from '../AppState.js'
export default class Cat {
    constructor(data) {
        this.body = data.body
        this.imgUrl = data.imgUrl
        this.posCount = data.posCount
        this.negCount = data.negCount
        this.voteCount = data.voteCount
        this.id = data._id
        this.accountId = data.accountId
    }

    get Template() {
        const username = ProxyState.account.username
        const avatar = ProxyState.account.avatar
        return /* html */ `

            <div class="bg-light col-10 col-md-3 shadow px-3 m-3 ${'cat' + this.VoteColor} ">
                <div id="${this.id + '-card'}" class="text-center">

                    <div class="row justify-content-start align-items-center px-3">
                        <div class="btn-group dropright">
                            <button type="button" class="btn btn-dark dropdown-toggle p-0 pr-2 pl-1 mr-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" onclick="app.catsController.catify('${this.id}')">"Catify"</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" onclick="app.catsController.deleteCat('${this.id}')">Delete "Cat"</a>
                            </div>
                        </div>
                        ${avatar}
                        <span><b>${username}</b></span>
                        <div class="ml-auto">
                            <span class="text-info px-2">${this.posCount}</span>
                            <span class=" ${'text' + this.VoteColor} px-2">${this.voteCount}</span>
                            <span class="text-danger px-2">${this.negCount}</span>
                        </div>
                    </div>

                    <div class="row justify-content-center px-2">
                        <img id="${this.id + '-img'}" class="img-fluid shadow rounded" src="${this.imgUrl}"
                            alt="cat post">
                        <div id="${this.id + '-comments'}" class="col-12 border-bottom border-dark d-none" >
                            <div class="locked-scroll">
                            ${this.Comments}
                            </div>
                            <form onSubmit="app.commentsController.createComment('${this.id}')">
                              <div class="form-group mt-3">
                                <label for="formGroupExampleInput"><b><u>Defend your position!</u></b></label>
                                <input type="text" name="body" class="form-control" id="body" placeholder="Is this a cat?" maxLength="30">
                              </div>
                            </form>
                        </div>
                    </div>

                    <p id="${this.id + '-body'}" class="pt-2 px-3 pb-1 mb-0 border-bottom border-dark"><i>${this.body}</i></p>

                    <div class="row justify-content-between align-items-center px-2">
                        <button class="col-3 bg-transparent border-none shadow-none btn text-center" onclick="app.catsController.upVote('${this.id}')"><h1><i id="${this.id + '-pos'}" class="fas fa-paw text-info"></i></h1></button>
                          <button id="${this.id + '-comment'}" class="col-6 btn btn-dark my-2 d-none" type="button" onclick="app.commentsController.revealComments('${this.id}')">Comments</button>
                          <button id="${this.id + '-back'}" class="col-6 btn btn-secondary my-2 d-none" type="button" onclick="app.commentsController.hideComments('${this.id}')">Go Back</button>
                        <span id="${this.id + '-cat'}" class="col-6"><h4>Is this a cat?</h4></span>
                        <button class=" col-3 bg-transparent border-none shadow-none btn text-center" onclick="app.catsController.downVote('${this.id}')"><h1><i id="${this.id + '-neg'}" class="fas fa-paw text-danger"></i></h1></button>
                    </div>
                </div>
            </div>
        `
    }

    //             <div class="modal fade" id="view-comments${this.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    //     aria-hidden="true">
    //     <div class="modal-dialog" role="document">

    //         <div class="modal-content">

    //             <div>
    //                 <button type="button" class="btn btn-non shadow-none text-info" onclick="app.commentsController.createComment()"><b>+</b></button><button type="button" class="btn btn-non shadow-none text-danger" data-dismiss="modal"><b>x</b></button>
    //             </div>

    //             <div class="modal-header" style="align-self: center;">
    //                 <h5 class="modal-title text-dark" id="exampleModalLabel"> ${this.Comments}</h5>
    //             </div>

    //         </div>
    //     </div>
    // </div>
    // `
    //     }

    get Comments() {
        const comments = ProxyState.comments.filter(comment => comment.catId === this.id)
        let template = ''
        comments.forEach(comment => template += comment.Template)
        return template
    }

    get VoteColor() {
        if (this.posCount === this.negCount * -1) {
            return '-dark'
        } else if (this.posCount > this.negCount * -1) {
            return '-info'
        } else {
            return '-danger'
        }
    }
}
