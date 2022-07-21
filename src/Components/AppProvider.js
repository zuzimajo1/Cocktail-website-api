import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

const UseContextProvider = createContext();

let url = 'https://thecocktaildb.com/api/json/v1/1/search.php?f=';

const AppProvider = ({ children }) => {
  const [loading, setloading] = useState(false);
  const [searchItem, setsearchItem] = useState('a');
  const [cocktailcontainer, setcocktailcontainer] = useState([]);

  const FetchData = useCallback(async () => {
    setloading(true);
    try {
      const response = await fetch(`${url}${searchItem}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const Datas = drinks.map((items) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            items;
          return {
            id: idDrink,
            name: strDrink,
            img: strDrinkThumb,
            glass: strAlcoholic,
            classInfo: strGlass,
          };
        });
        setcocktailcontainer(Datas);
      } else {
        setcocktailcontainer([]);
      }

      setloading(false);
    } catch (error) {
      setloading(false);
    }
  }, [searchItem]);

  useEffect(() => {
    FetchData();
  }, [searchItem, FetchData]);

  return (
    <UseContextProvider.Provider
      value={{ loading, cocktailcontainer, setsearchItem, setloading }}
    >
      {children}
    </UseContextProvider.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(UseContextProvider);
};

export { UseContextProvider, AppProvider };
