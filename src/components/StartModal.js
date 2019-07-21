import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalBody } from 'reactstrap';

const StartModal = props => {
  return (
    <Modal isOpen={props.modalStatus} centered className="modal-container">
      <ModalBody>
        <Button
          color="primary"
          onClick={props.closeModal}
          className="modal-button"
        >
          CLICk To START
        </Button>
      </ModalBody>
    </Modal>
  );
};

Modal.propTypes = {
  modalStatus: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default StartModal;
