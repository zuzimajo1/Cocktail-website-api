import React from "react";
import LoadingGif from "../images/loading.gif";
import "./components.css";

export const Loading = ()=>{
    return(
        <main className="loading-container">
            <div>
                <img src={LoadingGif}></img>
            </div>
        </main>
    )
}