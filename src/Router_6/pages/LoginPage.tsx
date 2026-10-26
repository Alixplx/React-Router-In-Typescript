import { useState, type SubmitEvent } from "react"
import { useLocation, useNavigate } from "react-router"
import { useAuth } from "../context/AuthContext"


type LoginLocationState = {

    from?: {

        pathname?: string
    };
};

function LoginPage() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const { login } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const state = location.state as LoginLocationState | null
    const destination = state?.from?.pathname ?? "/dashboard"

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {

        event.preventDefault()

        if (!username.trim() || !password.trim()) {

            setError("Please enter both your username and password.")
            return
        }

        setError("");

        // Demo only: replace this with real backend authentication.
        login();

        navigate(destination, { replace: true });
    }

    return (

        <div className="page">

            <form className="card" onSubmit={handleSubmit}>

                <h1>Login</h1>
                <p>Sign in to access protected pages.</p>

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
    );
}

export default LoginPage;