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
            <NavLink className="button" to="/sign-up">
               Sign Up
            </NavLink>
         </nav>
         </div>
      </header>
   )
}

export default Header;