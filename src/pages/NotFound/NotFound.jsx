import React, { Component } from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";

export class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <h1 style={{ textAlign: "center", marginTop: 100 }}>
          Not Found 404 Error
        </h1>
        <br />
        <Link
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
          to="/"
        >
          Home
        </Link>
      </div>
    );
  }
}

export default NotFound;
