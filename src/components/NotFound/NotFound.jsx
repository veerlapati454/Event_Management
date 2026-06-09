import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="notfound">

      <div className="notfound-content">

        <h1>404</h1>

        <h2>Oops! Page Not Found</h2>

        <p>
          The page you are looking for might have been
          removed, renamed, or is temporarily unavailable.
        </p>

        <Link to="/" className="home-btn">
          Back To Home
        </Link>

      </div>

    </section>
  );
}

export default NotFound;