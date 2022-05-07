import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalDisplay = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="modal-name">
          <div className="modal-top">
            <div className="modal-top-sub">
              <div className="modal-title">Activity Name</div>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-image">Activity Image</div>
      </Modal.Body>
      <Modal.Footer>
        <p className="modal-description">
          Description of activity?
        </p>
      </Modal.Footer>
    </Modal>
  );
};

const ActivityModal = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Details
      </Button>

      <ModalDisplay
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ActivityModal;
