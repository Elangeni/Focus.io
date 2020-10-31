import "./App.css";
import { Pomodoro, TodoList, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
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
