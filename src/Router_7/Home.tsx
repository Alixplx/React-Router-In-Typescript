import { Navigate, Route, Routes } from "react-router";
import "./style.css"
import UsersPage from "./pages/UsersPage";
import UserDetailsPage from "./pages/UserDetailsPage";


function Home() {

    return (

        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserDetailsPage />} />
          <Route path="*" element={
              <div className="page">

                <h1>404 - Page Not Found</h1>
              </div>
            }
          />
        </Routes>
    );

}

export default Home