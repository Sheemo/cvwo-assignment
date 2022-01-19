import React from "react";
import Modal from "react-modal";

// Modal.setAppElement("#root");

const NewTaskWindow = ({ show, onClose }) => {
    return (
        <Modal
            isOpen={show}
            ariaHideApp={false}
            onRequestClose={onClose}
            className={"my-modal"}
            overlayClassName={"overlay"}
        >
            <div className={"close-btn-ctn"}>
                <button className="close-btn" onClick={onClose}>X</button>
            </div>
            <div>
                <h2>Description</h2>
            </div>
        </Modal>
    );
};

export default NewTaskWindow;
