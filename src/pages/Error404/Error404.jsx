import { Layout } from "../../components";
import { useLocation, Link } from "react-router-dom";

const Error404 = () => {
  const location = useLocation();
  const notFoundPath = location.pathname.replace("/", "");

  return (
    <Layout>
      <h1 className="text-7xl font-black">404</h1>
      <h2>
        Page not found: <span className="text-error">{notFoundPath}</span>
      </h2>
      <button className="btn btn-primary">
        <Link to="/">Go to Home</Link>
      </button>
    </Layout>
  );
};

export default Error404;
