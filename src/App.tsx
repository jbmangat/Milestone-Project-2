
import './App.css';
import Nav from './Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AddWorkout } from "./components/AddWorkout";
import { EditWorkout } from "./components/EditWorkout";
import React from 'react';


function App() {
  return (
    <div className="App">
      <Nav />
      <footer className='footer'>
        Created By
      </footer>
    </div>
  );
}

export default App;

