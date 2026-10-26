import { useState, type SubmitEvent,  } from "react";
import { useNavigate } from "react-router";


function LoginPage() {

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {

        event.preventDefault()

        if (!username.trim() || !password.trim()) {

            setError("Please enter your username and password.")
            return
        }

        setError("")

        // Demo only: replace this with real backend authentication.
        navigate("/dashboard", { replace: true, state: { username }})
    }

    return (

        <div className="page">

            <form className="form-card" onSubmit={handleSubmit}>

                <h1>Login</h1>
                <p>Enter your details to continue.</p>

                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="Enter username"
                />

                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter password"
                />

                {error && <p className="error">{error}</p>}

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage;