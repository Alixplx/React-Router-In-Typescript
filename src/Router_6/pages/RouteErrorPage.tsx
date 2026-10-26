import { isRouteErrorResponse, Link, useRouteError} from "react-router"


function RouteErrorPage() {

    const error = useRouteError();
  
    let message = "Something went wrong.";
  
    if (isRouteErrorResponse(error)) {
      
        message = `${error.status} - ${error.statusText}`;

    } else if (error instanceof Error) {
      
        message = error.message;
    }
  
    return (

        <div className="page">

            <div className="card">

                <h1>Oops!</h1>
                <p>{message}</p>
                <Link to="/login">Return to Login</Link>
            </div>
        </div>
    );
}
  
export default RouteErrorPage;