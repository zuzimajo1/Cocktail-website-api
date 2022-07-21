import React, { useState, useRef, useEffect } from "react";
import "./components.css";
import { useGlobalContext } from "./AppProvider";

export const Searchbar = () => {
  const { setsearchItem } = useGlobalContext();
  const [inputText, setinputText] = useState('');
  // const searchValue = useRef('');

  const SetItemFunction = (e) => {
    const inputValue = e.target.value;
    setsearchItem(inputValue);
    setinputText(inputValue);
  };

  return (
    <section className="searchbar-container">
      <div className="searchbar-wrapper">
        <form onSubmit={(e)=>e.preventDefault()}>
          <label htmlFor='searchbars'>search your favourite cocktail</label>
          <input
            type='text'
            id='searchbars'
            // ref={searchValue}
            value={inputText}
            onChange={SetItemFunction}
          ></input>
        </form>
      </div>
    </section>
  );
};
