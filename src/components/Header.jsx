import { NavLink } from "react-router-dom"

function Header () {
   return (
      <header>
         <div className="logo">
         <h1>
            FunFlix
         </h1>
         <nav>
            <NavLink className="button" to="/login">
               Login
            </NavLink>
            <NavLink className="button" to="/signup">
               Sign Up
            </NavLink>
            <NavLink className="button" to="/movies">
               All Movies
            </NavLink>
         </nav>
         </div>
      </header>
   )
}

export default Header;