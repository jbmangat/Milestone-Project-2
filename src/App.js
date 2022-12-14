import React from 'react';
import './App.css';
import Nav from './Nav.js';
import Foot from './Footer.js';
// import { Sort } from './Sort';
import 'bootstrap/dist/css/bootstrap.min.css';
// CRUD and Context for Workout List
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Home } from "./components/Home";
// import { AddWorkout } from "./components/AddWorkout";
// import { EditWorkout } from "./components/EditWorkout";
// import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <div>
        <Foot />
      </div>
    </div>
    // <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
    //   <GlobalProvider>
    //     <Router>
    //       <h1>Header</h1>
    //       <Routes>
    //         <Route exact path="/" component={Home} />
    //         <Route path="/add" component={AddWorkout} />
    //         <Route path="/edit/:id" component={EditWorkout} />
    //       </Routes>
    //     </Router>
    //   </GlobalProvider>
    // </div>
  );
}

export default App;

