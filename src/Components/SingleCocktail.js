import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./components.css";
import {Loading} from "./Loading";

let url_id = "https://thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const SingleCocktail = () => {
  const [loading, setloading] = useState(false);
  const { id } = useParams();
  const [cocktaildataId, setcocktaildataId] = useState([]);
  console.log(cocktaildataId);
  console.log(loading);

  const DataId = async () => {
    setloading(true);
    try {
      setloading(true);
      const response = await fetch(`${url_id}${id}`);
      const DataItemId = await response.json();
      const { drinks } = DataItemId;
      if (drinks) {
        const {
          idDrink,
          strDrink,
          strDrinkThumb,
          strAlcoholic,
          strGlass,
          strCategory,
          strInstructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
        } = drinks[0];
        const ItemsCocktail = {
          id: idDrink,
          name2: strDrink,
          img: strDrinkThumb,
          category: strAlcoholic,
          info: strGlass,
          category2: strCategory,
          instructions: strInstructions,
          ingredients1: strIngredient1,
          ingredients2: strIngredient2,
          ingredients3: strIngredient3,
          ingredients4: strIngredient4,
        };
        setcocktaildataId(ItemsCocktail);
      } else {
        console.log("Error ID");
      }
      setloading(false);
    } catch (error) {
      console.log("Error!");
      setloading(false);
    }
  };

  useEffect(() => {
    DataId();
  }, [id]);


  if (loading) {
    return(
    <Loading />
    )
  }

  const {
    name2,
    img,
    category,
    info,
    category2,
    instructions,
    ingredients1,
    ingredients2,
    ingredients3,
    ingredients4,
  } = cocktaildataId;
  return (
    <main className="singlecocktail-container">
      <div key={id} className="singlecocktail-wrapper">
        <Link to="/">
          <button type="button" className="singlecocktail-button">
            Back home
          </button>
        </Link>
        <h2 className="singlecocktail-title">{name2}</h2>
        <div className="singlecocktail-items">
          <img src={img}></img>
          <div className="singlecocktail-descriptions">
            <p>
              <span>Name:</span>
              {name2}
            </p>
            <p>
              <span>Glass:</span>
              {info}
            </p>
            <p>
              <span>Info:</span>
              {category}
            </p>
            <p>
              <span>Category:</span>
              {category2}
            </p>
            <p>
              <span>Ingredients:</span>
              {ingredients1}, {ingredients2}, {ingredients3}, {ingredients4}
            </p>

            <p>
              <span>Instructions:</span>
              {instructions}
            </p>
          </div>
        </div>
      </div>
      );
    </main>
  );
};
