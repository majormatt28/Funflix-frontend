import {useState, useEffect} from "react";
import {Switch, Route} from "react-router-dom";
import MovieContainer from "./MovieContainer";
import MovieDetail from "./MovieDetail"
import Header from "./Header"
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import Home from "./Home";


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [userSignup, setUserSignUp] = useState(null)
  console.log(currentUser)
  // console.log(userSignup)

    useEffect(()=>{
        fetch ("http://127.0.0.1:3001/me")
        .then (resp=>resp.json())
        .then (user => setCurrentUser(user))
    },[])

    // useEffect(() => {
    //   fetch ("http://localhost:3001/users")
    //     .then (r => r.json())
    //     .then (data => setUserSignUp(data))
    // },[])

  return (
    <div className="App">
      <Header  currentUser={currentUser}/>
      
      <Switch>
        <Route exact path="/">
          <Home /> 
        </Route>

        <Route exact path="/login">
          <LoginForm setCurrentUser={setCurrentUser}/> 
        </Route>
       
        <Route exact path="/signup">
          <SignUpForm setUserSignUp={setUserSignUp}/>  
        </Route>
       
        <Route exact path="/movies">
          {currentUser ? <MovieContainer />  :null }
           
        </Route>        
      
        <Route exact path="/movies/:id">
          {currentUser ? <MovieDetail currentUser = {currentUser}/> :null  }
            
        </Route>
      </Switch>
    </div>
            
           
          
          
  
  )}
          
      
          
          
        
          
        
          
        
          
      
      


export default App;
