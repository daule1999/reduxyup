import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      signup
      <Button variant="contained" color="primary">
        <Link to="/" style={{ textDecoration: "none" }}>
          Go to Home Page
        </Link>
      </Button>
      <Button variant="contained" color="primary">
        <Link to="/login" style={{ textDecoration: "none" }}>
          Go to login Page
        </Link>
      </Button>
    </div>
  );
}
