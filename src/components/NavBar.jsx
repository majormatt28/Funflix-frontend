import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import AllMovies from "./AllMovies"

function NavBar () {
   return (
       <LoginForm />,
       <SignUpForm />,
       <AllMovies />
   );
}

export default NavBar;