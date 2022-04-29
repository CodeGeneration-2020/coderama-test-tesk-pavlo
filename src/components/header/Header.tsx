import { Link } from "react-router-dom";
import "./Header.module.css";

const Header = () => {
  return (
    <div className='container'>
      <Link to={"/"}>
        <h3 className='title'>Search</h3>
      </Link>
      <Link to={"/favorite-movies"}>
        <h3 className='title'>Favorites</h3>
      </Link>
    </div>
  );
};

export default Header;
