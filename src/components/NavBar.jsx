import {useState} from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import AllMovies from "./AllMovies"

function NavBar () {
    const [userLogin, setUserLogin] = useState(null)
    const [userSignUp, setUserSignUp] = useState(null)

   return (
       <div>
           {userLogin ? (
               <>
                    <AllMovies />
                    <button>Logout</button>
               </>
           ):( 
                <>
                    <LoginForm setUserLogin={setUserLogin} />
                    <SignUpForm setUserSignUp={setUserSignUp}/>
                </>
           )}
       </div>
   );
}

export default NavBar;