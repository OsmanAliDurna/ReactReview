import HeaderStyles from "./Header.module.scss";

const Header = ({ categories }) => {
  return (
    <div className={HeaderStyles.header}>
      <h1>Product List</h1>
      <div className={HeaderStyles.btns}>
        {categories.map((item, index) => (
          <button key={index}>{item}</button>
        ))}
      </div>
    </div>
  );
};

export default Header;
