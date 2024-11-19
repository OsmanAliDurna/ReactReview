import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TiDeleteOutline } from "react-icons/ti";

const AppointmentList = ({ setAppData, appData }) => {
  const handleDelete = (id) => {
    setAppData(appData.filter((item) => item.id !== id));
  };

  const handleToggle = (id) => {
    setAppData(
      appData.map((item) =>
        item.id === id ? { ...item, consulted: !item.consulted } : item
      )
    );
    
    localStorage.setItem(
      appData.map((item) =>
        item.id === id ? { ...item, consulted: !item.consulted } : item
      )
    );
  };

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      <Container className="justify-content">
        {appData.map(({ id, patient, day, consulted, doctor }) => (
          <Row
            className={`appointments${consulted ? " consulted" : ""}`}
            onDoubleClick={() => handleToggle(id)}
            key={id}
            role="button"
          >
            <Col>
              <Row className="text-danger h3">{patient}</Row>
              <Row>{doctor}</Row>
            </Col>
            <Col>
              <Row>Date : {new Date(day).toLocaleDateString("tr")}</Row>
              <Row>Time : {new Date(day).toLocaleTimeString("tr")}</Row>
            </Col>
            <Col className="text-end fs-1 text-danger">
              <TiDeleteOutline onClick={() => handleDelete(id)} />
            </Col>
          </Row>
        ))}
      </Container>
    </Container>
  );
};

export default AppointmentList;
