import {useState, useEffect} from "react";
import {Switch, Route} from "react-router-dom";
import MovieContainer from "./MovieContainer";
import Header from "./Header"
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import Home from "./Home";


function App() {
  const [userLogin, setUserLogin] = useState(null)
  const [userSignup, setUserSignUp] = useState(null)
  console.log(userLogin)
  console.log(userSignup)

    // useEffect(()=>{
    //     fetch ("http://127.0.0.1:3001/me")
    //     .then (resp=>resp.json())
    //     .then (user => setUserLogin(user))
    // },[])

    // useEffect(() => {
    //   fetch ("http://localhost:3001/users")
    //     .then (r => r.json())
    //     .then (data => setUserSignUp(data))
    // },[])

  return (
    <div className="App">
      <Header 
      title="FunFlix"
      />
        {/* <Switch> */}
          {/* <Route exact path="/"> */}
            <Home />  
          {/* </Route> */}
          <Route exact path="/login">
            <LoginForm setUserLogin={setUserLogin}/>  
          </Route>
          <Route exact path="/sign-up">
            <SignUpForm setUserSignUp={setUserSignUp}/>      
          </Route>
          {/* <Route exact path="/movies"> */}
            <MovieContainer />
          {/* </Route> */}
         {/* </Switch> */}
    </div>
  )}
          
      
          
          
        
          
        
          
        
          
      
      


export default App;
