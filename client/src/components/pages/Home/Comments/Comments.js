import React from "react";

const Comments = () => {
    return (
        <div>
            {/* <a onClick={props.modalTrigger} href="#modal1" data-target="modal1" class="btn-small modal-trigger post">Add a Comment</a> */}

            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>Comment</h4>
                    <input id='titleinput' placeholder="Title" name='title' />
                    <textarea id='bodyinput' name='body'></textarea>
                </div>

                <div id="#{{this._id}}" className="modal-footer">
                    <a href="#!" id="#{{this._id}}" className="modal-action modal-close waves-effect waves-green btn-flat save-post">Post</a>
                </div>
            </div>

        </div>
    );
};

export default Comments;