import { Routes, Route } from "react-router-dom";
import Productcard from "./components/productcard";
import About from "./components/about";
import Productdetail from "./components/productdetail";
import Nav from "./components/navigation";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Productcard />} />
        <Route path="/productdetail" element={<Productdetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
