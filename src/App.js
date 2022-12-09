
import './App.css';
import Nav from './Navbar.js';
import AddWorkout from './AddWorkout';
import { Sort } from './Sort';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { AddWorkout } from "./components/AddWorkout";
import { EditWorkout } from "./components/EditWorkout";


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

