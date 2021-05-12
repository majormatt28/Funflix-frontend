import { NavLink } from "react-router-dom";
import {useHistory} from "react-router-dom";
import logo from "./logo.png";

function Header ({currentUser, setCurrentUser}) {
   const history = useHistory()
   const logout=()=>{
      localStorage.getItem("token")
      setCurrentUser(null)
      history.push("/")
   }
   return (
      <header>
         <img className="logo" src={logo} alt="logo"/>
         <nav>
            {currentUser? (
               <>
               {/* <NavLink className="button" to="/movies">
               All Movies
            </NavLink> */}
               <button onClick={logout}className="button" >Logout</button>
               </>
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