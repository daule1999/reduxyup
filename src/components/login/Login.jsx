import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      login
      <Button variant="contained" color="primary">
        <Link to="/" style={{ textDecoration: "none" }}>
          Go to Home Page
        </Link>
      </Button>
      <Button variant="contained" color="primary">
        <Link to="/signup" style={{ textDecoration: "none" }}>
          Go to signup Page
        </Link>
      </Button>
    </div>
  );
}

export default Login;
