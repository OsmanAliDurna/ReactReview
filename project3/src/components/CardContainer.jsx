import { useState } from "react";
import CardFooter from "./CardFooter";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const CardContainer = ({ data }) => {
  const [toggle, setToggle] = useState("true");

  const handleSwap = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <Form.Control className="w-50 m-auto" placeholder="Search a player" />
      <Row onClick={handleSwap}>
        {toggle ? (
          <Card>
            <Card.Img variant="top" src={data.img} />
          </Card>
        ) : (
          <div>{data.statistics}</div>
        )}
      </Row>

      <CardFooter data={data.name} />
    </div>
  );
};

export default CardContainer;
