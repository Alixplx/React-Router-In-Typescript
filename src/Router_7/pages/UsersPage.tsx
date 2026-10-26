import { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { getUsers } from "../api/usersApi";
import type { User } from "../types/user";
import Loading from "../components/Loading";


function UsersPage() {

    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {

        let cancelled = false;

        async function fetchUsers() {

            try {
                setLoading(true);
                setError("");

                const data = await getUsers();

                if (!cancelled) {
                
                    setUsers(data);
                }
            } catch (error: unknown) {

                if (cancelled) return;

                if (axios.isAxiosError(error)) {
                    setError(
                        error.code === "ECONNABORTED"
                        ? "The request timed out. Please try again."
                        : "Could not load users. Please try again."
                    );
                } else {

                    setError("An unexpected error occurred.");
                }

            } finally {

                if (!cancelled) {
                
                    setLoading(false);
                }
            }
        }

        void fetchUsers();

        return () => {
        
            cancelled = true
        }

    }, []);

    if (loading) {
        
        return <Loading message="Loading users..." />;
    }

    if (error) {

        return (

            <div className="page">

                <p className="error">{error}</p>
            </div>
        )
    }

    return (

        <div className="page">
            <div className="container">

                <h1>Users Directory</h1>
                <p>Select a user to see their details.</p>

                <div className="users-grid">

                    {users.map((user) => (

                        <article className="user-card" key={user.id}>
                            
                            <h2>{user.name}</h2>
                            <p>@{user.username}</p>
                            <p>{user.email}</p>
                            <Link to={`/users/${user.id}`}>View Details</Link>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UsersPage;