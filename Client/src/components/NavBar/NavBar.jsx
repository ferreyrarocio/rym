import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import { Link, NavLink} from "react-router-dom";

const NavBar = ({ onSearch }) => {
  return (
     <div 
     className={style.nav}>
      <img className={style.logo}src= "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"></img>
      <SearchBar onSearch={onSearch} />

      <Link to="/home">
        <button>Home</button>
      </Link>

      <NavLink to="/about">
        <button>About</button>
      </NavLink>

      <NavLink to="/favorites">
        <button>Favorites</button>
      </NavLink>
    </div>
  );
};

export default NavBar;
