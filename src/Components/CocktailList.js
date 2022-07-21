import React from "react";
import { useGlobalContext } from "./AppProvider";
import {Loading} from "./Loading";
import {Cocktail} from "./Cocktail";


export const CocktailList = () => {
  const { cocktailcontainer, loading } = useGlobalContext();
  if (loading) {
    return (
      <section>
        <Loading />
      </section>
    );
  }
  if (cocktailcontainer.length < 1) {
    return (
      <section>
        <div>
          <p>No components match the search item</p>
        </div>
      </section>
    );
  }
  return (
    <div>
      <h3 className="cocktails-title">Cocktails</h3>
      <div className="cocktail-body">
        {cocktailcontainer.map((items) => {
          return <Cocktail key={items.id} {...items} />;
        })}
      </div>
    </div>
  );
};
