import {useState, useEffect} from "react";
import {Switch, Route} from "react-router-dom";
import MovieContainer from "./MovieContainer";
import Header from "./Header"
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import Home from "./Home";


function App() {
  const [userLogin, setUserLogin] = useState(null)
  console.log(userLogin)
    // useEffect(()=>{
    //     fetch ("http://127.0.0.1:3001/me")
    //     .then (resp=>resp.json())
    //     .then (user => setUserLogin(user))
    // },[])
  return (
    <div className="App">
      <Header />
      
      <Home /> 
       
      <LoginForm setUserLogin={setUserLogin}/>  
       
      
      
      <SignUpForm />   
          
      <MovieContainer />
         
      </div>
            
           
          
          
  )}
          
      
          
          
        
          
        
          
        
          
      
      


export default App;
