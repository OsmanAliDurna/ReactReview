import { useState } from "react";
import Card from "react-bootstrap/Card";

const CardContainer = ({ data }) => {
  const [toggle, setToggle] = useState("true");

  const handleSwap = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <Card className="w-25 mx-auto my-1 row" onClick={handleSwap}>
        {toggle ? (
          <Card.Img className="img" variant="top" src={data.img} />
        ) : (
          <ul className="m-auto">
            {data.statistics.map((item, i) => (
              <li className="list-unstyled h5 " key={i}>
                {" "}
                🏀{item}
              </li>
            ))}
          </ul>
        )}
        <Card.Footer>
          <Card.Title>{data.name}</Card.Title>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CardContainer;
