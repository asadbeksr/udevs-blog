import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="app-wrap">
      <div style={{ marginTop: "100px", marginBottom: "400px" }}>
        <h1> 404 Error Page Not Found</h1>

        <h2 style={{ color: "blue" }}>
          <Link to="/">Return to HOME page</Link>
        </h2>
      </div>
    </div>
  );
}
