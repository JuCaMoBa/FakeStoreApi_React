import { Link, Routes, Route } from "react-router-dom";
import Productcard from "./components/productcard";
import About from "./components/about";
import Productdetail from "./components/productdetail";
import "./styles/App.css";

function App() {
  return (
    <div>
      <nav className="nav">
        <Link to="/productcard"> Product Card </Link>
        <></>
        <Link to="/about"> About</Link>
      </nav>
      <Routes>
        <Route path="/productcard" element={<Productcard />} />
        <Route path="/productdetail" element={<Productdetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
