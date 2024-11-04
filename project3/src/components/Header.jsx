import nbaLogo from "../assets/nba-logo.png";

const Header = () => {
  return (
    <div>
      <img src={nbaLogo} alt="logo" />
      <h1 className="my-2 font-monoscape display-4 fw-bold">NBA Legends</h1>
    </div>
  );
};

export default Header;
