import {useState} from "react";
import {useHistory} from "react-router-dom"

function LoginForm ({ setCurrentUser }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        fetch ("http://127.0.0.1:3001/login",{
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({username, password})
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
        .then (data => {
            // console.log(data)
            const {user, token} = data
            localStorage.setItem("token", token)
            setCurrentUser(user)
            history.push("/movies")
        })
        .catch(error => setErrors(error.errors))
    }

    return (
        <section>
            <form onSubmit={handleSubmit} className="login-box">
                <h2>Login</h2>
                <div className="user-box">
                <label className="label1">User Name: </label>
                <input type="text"
                    name="username"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                />
                </div>
                <br/>
                <div className="user-box">
                <label className="label2">Password: </label>
                <input type="password"
                    name="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                </div>
                <br/>
                {errors.map(error=><h3 style={{color:"black"}} key={error}>{error}</h3>)}
                <br/>
                <button type="submit">Login</button>
            </form>
        </section>
    )
}

export default LoginForm;