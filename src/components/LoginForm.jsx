import {useState} from "react";
import { useHistory } from "react-router-dom"

function LoginForm ({ setUserLogin }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        fetch ("http://127.0.0.1:3001/login",{
            method: "POST",
        })
        .then (resp => resp.json())
        .then (user => {
            setUserLogin(user)
            history.push(`/movies`)
        })
    }

    return (
        <section>
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
                <label>User Name</label>
                <input type="text"
                    name="username"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                />
                <label>Password</label>
                <input type="password"
                    name="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </section>
    )
}

export default LoginForm;