import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalBody } from 'reactstrap';

const StartModal = props => {
  return (
    <Modal isOpen={props.modalStatus} centered>
      <ModalBody>
        <Button
          color="primary"
          onClick={props.closeModal}
          className="modalButton"
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
