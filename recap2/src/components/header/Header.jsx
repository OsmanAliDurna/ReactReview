import HeaderStyle from "./Header.module.css";

const Header = ({ name }) => {
  return <h1 className={HeaderStyle.title}>{name}</h1>;
};

export default Header;
