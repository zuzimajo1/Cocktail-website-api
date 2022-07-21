import React from "react";
import { Searchbar } from "./Searchbar";
import {CocktailList} from "./CocktailList";
import "./components.css";


export const Home = () => {
  return (
    <main >
      <Searchbar />
      <CocktailList />
    </main>
  );
};
