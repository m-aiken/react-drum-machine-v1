import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalBody } from 'reactstrap';

const StartModal = props => {
  return (
    <Modal isOpen={props.modalStatus} centered className="modal-container">
      <ModalBody>
        {!props.soundsLoaded ? (
          <h2 className="loading-message">sounds loading...</h2>
        ) : (
          <Button
            color="primary"
            onClick={props.closeModal}
            className="modal-button"
          >
            CLICk To START
          </Button>
        )}
      </ModalBody>
    </Modal>
  );
};

Modal.propTypes = {
  soundsLoaded: PropTypes.bool.isRequired,
  modalStatus: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default StartModal;
