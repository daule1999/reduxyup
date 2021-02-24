import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Button variant="contained" color="primary">
        <Link to="/login" style={{ textDecoration: "none" }}>
          Go to login Page
        </Link>
      </Button>
      <Button variant="contained" color="primary">
        <Link to="/login" style={{ textDecoration: "none" }}>
          Go to signup Page
        </Link>
      </Button>
    </div>
  );
}
