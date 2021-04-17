/* eslint-disable no-return-assign */
/* eslint-disable indent */

import { ProxyState } from '../AppState.js'
export default class Cat {
    constructor(data, disabled = '') {
        this.body = data.body
        this.imgUrl = data.imgUrl
        this.posCount = data.posCount
        this.negCount = data.negCount
        this.voteCount = data.voteCount
        this.id = data._id
        this.accountId = data.accountId
        this.disabled = disabled
    }

    get Template() {
        const username = ProxyState.account.username
        const avatar = ProxyState.account.avatar
        return /* html */ `

                <div class="card ${this.VoteColor} rounded col-11 col-md-3 p-3 shadow m-3">
                <div id="${this.id + '-card'}" class="text-center">

                    <div class="row justify-content-start align-items-center px-3">
                        <div class="btn-group dropright">
                            <button type="button" class="btn btn-dark dropdown-toggle p-0 pr-2 pl-1 mr-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" onclick="app.catsController.catify('${this.id}')">Catify</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" onclick="app.catsController.deleteCat('${this.id}')">Delete Cat</a>
                            </div>
                        </div>
                        ${avatar}
                        <span><b>${username}</b></span>
                        <div class="ml-auto">
                            <span class="text-info px-2">${this.posCount}</span>
                            <span class="${this.VoteColor} px-2">${this.voteCount}</span>
                            <span class="text-danger px-2">${this.negCount}</span>
                        </div>
                    </div>

                    <span><img class="img-fluid shadow rounded justify-content-center mx-1" src="${this.imgUrl}"
                        alt="cat post"></span>

                    <p class="pt-2 px-3">${this.body}</p>

                    <div class="row justify-content-between align-items-center px-2">
                        <button class="col-3 bg-transparent border-none shadow-none btn text-center" onclick="app.catsController.upVote('${this.id}')"><h2><i id="${this.id + '-pos'}" class="fas fa-paw text-info" ${this.disabled}></i></h2></button>
                          <button id="${this.id + '-comment'}" class="col-6 btn btn-dark my-2 d-none" type="button" onclick="app.commentsController.getComments('${this.id}')" data-toggle="modal" data-target="#view-comments${this.id}">Comments</button>
                        <span id="${this.id + '-cat'}" class="col-6"><h5>Is this a cat?</h5></span>
                        <button class=" col-3 bg-transparent border-none shadow-none btn text-center" onclick="app.catsController.downVote('${this.id}')"><h2><i id="${this.id + '-neg'}" class="fas fa-paw text-danger" ${this.disabled}></i></h2></button>
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
        const ings = ProxyState.comments.filter(i => i.catId === this.id)
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
