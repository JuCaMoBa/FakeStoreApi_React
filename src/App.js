/* eslint-disable no-unused-vars */
import { Link, Routes, Route } from "react-router-dom";
import Productcard from "./components/productcard";
import Productdetail from "./components/productdetail";
import About from "./components/about";

function App() {
  return (
    <div>
      <nav>
        <Link to="/productcard"> Productcard </Link>
        <Link to="/productdetail"> Productdetail </Link>
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
