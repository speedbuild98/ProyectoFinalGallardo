// Desc: This is the root component of the application
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Pages
import { Home, Products, Error404, Checkout } from "./pages";
//Components
import {
  NavBar,
  Footer,
  PopUp,
  ItemDetailContainer,
  CartProvider,
} from "./components";
//Assets
import DataContextProvider  from "./utils/DataContextProvider";

function App() {
  return (
    <>
      <BrowserRouter>
      <DataContextProvider>
        <CartProvider>
          <NavBar />
          <PopUp />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Error404 />} />
            <Route
              path="/products/category/:categoryId"
              element={<Products />}
            />
            <Route
              path="/products/item/:productId"
              element={<ItemDetailContainer />}
            />
          </Routes>
          <Footer />
        </CartProvider>
        </DataContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
