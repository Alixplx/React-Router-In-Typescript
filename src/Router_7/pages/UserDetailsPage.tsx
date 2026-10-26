import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import axios from "axios";
import { getUserById } from "../api/usersApi";
import type { User } from "../types/user";
import Loading from "../components/Loading";


function UserDetailsPage() {

    const { id } = useParams<{ id: string }>();

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        let cancelled = false;

        async function fetchUser() {

            if (!id || !/^[1-9]\d*$/.test(id)) {
                setError("Invalid user ID.");
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError("");
                setUser(null);

                const data = await getUserById(Number(id));

                if (!cancelled) {
                
                    setUser(data);
                }
            } catch (error: unknown) {

                if (cancelled) return;

                if (axios.isAxiosError(error) && error.response?.status === 404) {
                
                    setError("User not found.");

                } else if (axios.isAxiosError(error) && error.code === "ECONNABORTED") {
                    
                    setError("The request timed out. Please try again.");

                } else {

                    setError("Could not load this user. Please try again.");
                }

            } finally {

                if (!cancelled) {
                
                    setLoading(false);
                }
            }
        }

        void fetchUser();

        return () => {
        
            cancelled = true;
        }

    }, [id]);

    if (loading) {
        
        return <Loading message="Loading user details..." />;
    }

    if (error) {

        return (

            <div className="page">
                <div className="content-card">
                    <h1>Unable to Display User</h1>
                    <p className="error">{error}</p>
                    <Link to="/users">Back to Users</Link>
                </div>
            </div>
        );
    }

    if (!user) {
        
        return null;
    }

    return (

        <div className="page">
            <div className="content-card">
                <h1>{user.name}</h1>

                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Website:</strong> {user.website}</p>
                <p><strong>Company:</strong> {user.company.name}</p>
                <p><strong>City:</strong> {user.address.city}</p>
                <Link to="/users">Back to Users</Link>
            </div>
        </div>
    )
}

export default UserDetailsPage