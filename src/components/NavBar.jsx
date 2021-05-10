import {useState, useEffect} from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import AllMovies from "./AllMovies"

function NavBar ({userLogin, setUserLogin}) {
    

   return (
       <div>
           {userLogin? (
               <>
                    <AllMovies />
                    <button>Logout</button>
               </>
           ):(
                <>
                    <LoginForm setUserLogin={setUserLogin} />
                    <SignUpForm />
                </>
           )}
       </div>
   );
}

export default NavBar;