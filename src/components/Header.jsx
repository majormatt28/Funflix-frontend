import { NavLink } from "react-router-dom";
import {useHistory} from "react-router-dom";


function Header ({currentUser, setCurrentUser}) {
   const history = useHistory()
   const logout=()=>{
      localStorage.getItem("token")
      setCurrentUser(null)
      history.push("/")
   }
   return (
      <header>
         <div className="logo">
         <h1>FunFlix</h1>
         </div>
         <nav>
            {currentUser? (
               <div className="main-menu-button">
               <NavLink className="button" to="/movies">
               All Movies
            </NavLink>
               <button onClick={logout} className="button">Logout</button>
               </div>
            ):(
               <div className="lgn-sgn-button">
                  <NavLink className="button" to="/login">
                     Login
                  </NavLink>
                  <NavLink className="button" to="/signup">
                     Sign Up
                  </NavLink>
               </div>
            )}
         </nav>
      </header>
   )
}

export default Header;