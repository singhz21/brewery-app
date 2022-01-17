import { Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Brewery from "./components/Brewery";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route exact path="/:id" element={<Brewery />} />
      </Routes>
    </div>
  );
}

export default App;
