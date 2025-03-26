import "./App.css";
import { UserList } from "./components/UserList/UserList";
import { Router } from "./router/Router";

function App() {
  return (
    <div className="App">
      <UserList />
      <Router />
    </div>
  );
}

export default App;
