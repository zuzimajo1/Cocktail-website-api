import React from "react";
import { Link } from "react-router-dom";
import "./components.css";

export const Error = ()=>{
    return (
      <section className="error-container">
        <h3>This is dead end!</h3>
        <div>
          <Link to="/">
            <button type="button">Back to home</button>
          </Link>
        </div>
      </section>
    );
}