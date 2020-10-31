import "./App.css";
import { Pomodoro, TodoList, Navbar} from "./components";
//import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Pages'
import Wiki from './Pages/Wiki'
import Reports from './Pages/Reports'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
      
        <Route path="/reports" component={Reports} />
        <Route path="/wiki" component={Wiki} />
      </Switch>
    </Router>
      <div className="container">
        <div className="todo-app">
          <TodoList />
        </div>
        <div className="pomodoro">
        <Pomodoro />
        </div>
        
      </div>
    </div>
  );
}

export default App;
