import './App.css';
import Nav from './Navbar.js';
import AddWorkout from './AddWorkout';
import { Sort } from './Sort';

// CRUD and Context for Workout List
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { AddWorkout } from "./components/AddWorkout";
import { EditWorkout } from "./components/EditWorkout";
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
<div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={() => <Home users={users} setUsers={setUsers} />} /> */}
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddWorkout} />
            <Route path="/edit/:id" component={EditWorkout} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;

