import {React} from "react";
import {NavLink} from "react-router-dom";
// import LoginForm from "./LoginForm";
// import SignUpForm from "./SignUpForm";
// import AllMovies from "./AllMovies"

function NavBar ({userLogin}) {
    // const [userLogin, setUserLogin] = useState(null)
    // const [userSignUp, setUserSignUp] = useState(null)

   return ( 
        <div>
            {userLogin? (
                <button>Logout</button>
            ):(
            <>
                <NavLink  to ="/login">
                    Login
                </NavLink>
                <NavLink  to ="/signup">
                    SignUp
                </NavLink>
            </>
            )}
            

            {/* <NavLink to ="/signup">
                
            </NavLink> */}
            
                
                     {/* <AllMovies /> */}
                    
               
            
                 
                     {/* <LoginForm setUserLogin={setUserLogin} />
                     <SignUpForm setUserSignUp={setUserSignUp}/> */}
                 
            
       </div>
   );
}

export default NavBar;