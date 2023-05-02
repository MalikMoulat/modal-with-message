import React from "react";
import PropTypes from "prop-types";

import "./modal.css";

function ModalWithMessage({ setVar, message }){
    return(
        <React.Fragment>
            <div className="modal-wrap">
                <div className="modal-msg">
                    <button className="modal-btn" onClick={() => setVar(false)}>
                        X
                    </button>
                    <p>
                        {message}
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
}

ModalWithMessage.propTypes = {
    setVar: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired
};

export default ModalWithMessage;