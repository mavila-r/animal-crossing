import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Villager, Villagers } from "./pages";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/Villagers/:name" element={<Villager />} />
        <Route path="/Villagers" element={<Villagers />} />
        <Route path="/" element={<Villagers />} />

        </Routes>
    </div>
    </Router>
  );
}

export default App;
