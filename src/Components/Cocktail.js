import React from "react";
import { useGlobalContext } from "./AppProvider";
import "./components.css";
import { Link } from "react-router-dom";

export const Cocktail = ({ id, name, glass, img, classInfo }) => {
  const { Loading } = useGlobalContext();
  return (
    <div className="cocktails-item-container">
      <img src={img} alt={name}></img>
      <div className="cocktails-information">
        <h3>{name}</h3>
        <p>{classInfo}</p>
        <p>{glass}</p>
        <Link to={`/cocktail/${id}`}>
          <button type="button" className="cocktails-item-button">Details</button>
        </Link>
      </div>
    </div>
  );
};
