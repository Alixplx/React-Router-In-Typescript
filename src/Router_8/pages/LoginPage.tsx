import { useState, type SubmitEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useAuth } from "../auth/AuthContext";


type LoginState = {

    from?: {
        pathname?: string;
        search?: string;
        hash?: string;
    };
};

function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { login, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const state = location.state as LoginState | null;
    const from = state?.from;

    const destination = from ? `${from.pathname ?? "/dashboard"}${from.search ?? ""}${from.hash ?? ""}` : "/dashboard";

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {

        event.preventDefault();

        if (!username.trim() || !password.trim()) {
        
            setError("Please fill in both fields.");
            return;
        }

        // Demo only: this does not verify credentials.
        login();
        navigate(destination, { replace: true });
    }

    if (isAuthenticated) {

        return (

            <main className="container">

                <h1>You're already logged in.</h1>
                <Link to="/dashboard">Go to Dashboard</Link>
            </main>
        );
    }

    return (

        <main className="container login-container">

            <form className="login-form" onSubmit={handleSubmit}>

                <h1>Login</h1>
                <p>Log in to access the dashboard.</p>

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
        </main>
    );
}

export default LoginPage;