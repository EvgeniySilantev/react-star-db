import React from 'react';
import './App.css';
import AppHeader from "./components/app-header/app-header";
import RandomPlanet from "./components/random-planet";
import ItemList from "./components/item-list";
import PersonDetails from "./components/person-detail";

function App() {
  return (
    <div>
      <AppHeader/>
      <RandomPlanet/>
      <div className="row mb2">
          <div className="col-md-6">
            <ItemList/>
          </div>
          <div className="col-md-6">
            <PersonDetails/>
          </div>
      </div>
    </div>
  );
}

export default App;
