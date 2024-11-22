import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const AddModal = ({ drName, show, handleClose, appData, setAppData }) => {
  const [patient, setPatient] = useState({
    name: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      id: new Date().getTime(),
      patient: patient.name,
      day: patient.date,
      consulted: false,
      doctor: drName,
    };

    let added = [...appData, newData];
    setAppData(added);
    localStorage.setItem("list", JSON.stringify(added));
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPatientName">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Name"
                onChange={(e) =>
                  setPatient({ ...patient, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="Date"
                onChange={(e) =>
                  setPatient({ ...patient, date: e.target.value })
                }
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="success" type="button" onClick={handleClose}>
                Close
              </Button>
              <Button variant="danger" type="submit" onClick={handleSubmit}>
                Save Changes
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddModal;
