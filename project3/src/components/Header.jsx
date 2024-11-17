import nbaLogo from "../assets/nba-logo.png";
import Form from "react-bootstrap/Form";

const Header = ({ handleSearch }) => {
  return (
    <div>
      <img src={nbaLogo} alt="logo" />
      <h1 className="my-2 font-monoscape display-4 fw-bold">NBA Legends</h1>

      <Form.Control
        className="w-50 m-auto "
        placeholder="Search a player"
        type="search"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Header;
