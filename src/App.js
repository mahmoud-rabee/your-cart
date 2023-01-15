import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import ProductDetails from "./Components/ProductDetails";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/your-cart" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
