import Button from "../button/Button";
import Image from "../image/Image";

const Card = ({ img, btn }) => {
  return (
    <div>
      <Image img={img} />
      <Button name={btn} />
    </div>
  );
};

export default Card;
