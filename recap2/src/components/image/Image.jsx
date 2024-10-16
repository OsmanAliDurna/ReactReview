import ImageStyle from "./Image.module.css";

const Image = ({ img }) => {
  return <img className={ImageStyle.images} src={img} alt="img" />;
};

export default Image;
