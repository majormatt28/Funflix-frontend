import { useState } from "react";
import { useHistory } from "react-router-dom"


function SignUpForm ({ setUserSignUp }) {
   const [username, setUserName] = useState("");
   const [password, setPassword] = useState("");
   const [age, setAge] = useState(0);
   const history = useHistory()

   function handleSubmit(e) {
      e.preventDefault();

      fetch("http://localhost:3001/users", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
         },
         body: JSON.stringify({ username, password, age })
      })
         .then(r => r.json())
         .then(newUser => {
            setUserSignUp(newUser);
            history.push(`/login`)
         })
   }

   return (
      <section>
         <form onSubmit={handleSubmit} className="signup-form">
            <h3>Please fill out Sign Up Form</h3>
            <label htmlFor="username">UserName</label>
            <input
               type="text"
               name="username"
               value={username}
               onChange={(event) => setUserName(event.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input 
               type="password"
               name="password"
               value={password}
               onChange={(event) => setPassword(event.target.value)}
            />
            <label htmlFor="age">Age</label>
            <input 
               type="number"
               name="age"
               value={age}
               onChange={(event) => setAge(event.target.value)}
            />
            <button type="submit">Sign Up</button>
         </form>
      </section>
   )
}

export default SignUpForm;