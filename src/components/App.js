import {useState, useEffect} from "react";
import NavBar from "./NavBar";
import MovieContainer from "./MovieContainer";
import FunFlixHeader from "./FunFlixHeader"



function App() {
  const [userLogin, setUserLogin] = useState(null)
    console.log(userLogin )
    useEffect(()=>{
        fetch ("http://127.0.0.1:3001/me")
        .then (resp=>resp.json())
        .then (user => setUserLogin(user))
    },[])
  return (
    <div className="App">
      <FunFlixHeader />
      <NavBar userLogin = {userLogin} setUserLogin={setUserLogin}/>
      <MovieContainer />
    </div>
  );
}

export default App;
