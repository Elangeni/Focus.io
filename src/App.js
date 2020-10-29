import './App.css';
import {Pomodoro, Todo, Navbar} from './components';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
      <Todo />
      <Pomodoro />
      </div>
      
    </div>
  );
}

export default App;
