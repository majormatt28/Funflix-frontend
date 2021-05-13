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
  // console.log("current user",currentUser)

    useEffect(()=>{
      const token = localStorage.getItem("token")
      fetch ("http://127.0.0.1:3001/me", {
        headers: {"Authorization": `Bearer ${token}`}
      })
      .then (resp => {
        return resp.json().then(data=>{
            if (resp.ok){
                return data
            }else{
                throw data
            }
        })
    })
      .then (user => setCurrentUser(user))
    },[])


  return (
    <div className="App">
      <Header  currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      
      <Switch>
        <Route exact path="/">
          <Home /> 
        </Route>

        <Route exact path="/login">
          <LoginForm setCurrentUser={setCurrentUser}/> 
        </Route>
       
        <Route exact path="/signup">
          <SignUpForm setCurrentUser={setCurrentUser}/>  
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
