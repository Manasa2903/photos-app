import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/" className="link">
        <Button color="primary">Home</Button>
      </Link>
      <Link to="/about" className="link">
        <Button color="primary">About</Button>
      </Link>
    </div>
  );
};

export default Navbar;
