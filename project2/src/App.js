// import Header from "./components/header/Header";
import HeaderHamburgerMenu from "./components/headerHamburgerMenu/HeaderHamburgerMenu.jsx";
import ProductsList from "./components/products/ProductsList.jsx";

import { categories, products } from "./helper/data.js";
import "./App.scss";

function App() {
  return (
    <div>
      {/* <Header categories={categories} /> */}
      <HeaderHamburgerMenu categories={categories} />
      <ProductsList products={products} />
    </div>
  );
}

export default App;
