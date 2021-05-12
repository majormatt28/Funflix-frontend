import { NavLink } from "react-router-dom";
import logo from "./logo.png";

function Header ({currentUser}) {
   return (
      <header>
         <img className="logo" src={logo} alt="logo"/>
         <nav>
            {currentUser? (
               <NavLink className="button" to="/movies">
               All Movies
            </NavLink>
            ):(
            <>
               <NavLink className="button" to="/login">
                  Login
               </NavLink>
               <NavLink className="button" to="/signup">
                  Sign Up
               </NavLink>
            </>
            )}
         </nav>
      </header>
   )
}

export default Header;