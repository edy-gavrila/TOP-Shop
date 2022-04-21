import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import useCart from "./hooks/useCart";

function App() {
  const [cart, dispatch] = useCart();

  const addItemHandler = (item) => {
    dispatch({ type: "add", value: item });
  };

  const removeItemHandler = (item) => {
    dispatch({ type: "remove", value: item });
  };

  return (
    <div className="App bg-slate-200 min-h-screen min-w-[340px]">
      <Header itemCount={cart.itemCount} />
      <div className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop onAddItem={addItemHandler} />} />
          <Route
            path="/cart"
            element={
              <Cart
                onAddItem={addItemHandler}
                onRemoveItem={removeItemHandler}
                cart={cart}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
