import Header from "./components/header/Header";
import ProductsList from "./components/products/ProductsList.jsx";

import { categories, products } from "./helper/data.js";

function App() {
  return (
    <div>
      <Header categories={categories} />
      <ProductsList products={products} />
    </div>
  );
}

export default App;
