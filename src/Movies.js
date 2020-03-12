import React from "react";
import Cardmovie from "./components/CardMovie";
import "./App.css";

export const Movies = () => (
  <div>
    <i class="fas fa-plus"></i>
    <h1 className="Movies">Movies</h1>

    <Cardmovie />
  </div>
);
