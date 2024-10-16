const Header = ({categories}) => {
  return <div>
      {categories.map((item) => (
        <div>{item}</div>
      ))}
    </div>;
};

export default Header;
