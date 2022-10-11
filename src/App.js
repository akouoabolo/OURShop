import "./style/App.css";
import { useState } from "react";

import Topbar from "./topbar";
import Topbar2 from "./componnents/Topbar_2";
import Head from "./componnents/Head";
import Shop from "./componnents/Shop";
import Items from "./componnents/Items";
import Deal from "./componnents/Deal";
import Footer from "./componnents/Footer";

function App() {
  const [cart, setCartCount] = useState(0);
  let cartCount = cart.length;
  if (cart === null) {
    cartCount = 0;
  }

  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="container-fluid">
      <Topbar />
      <Topbar2 count={cartItems.length} />
      <Head />
      <Shop />
      <Items
        cartItems={cartItems}
        setCartItems={setCartItems}
        count={cartCount}
        setCartCount={setCartCount}
      />
      <Deal />
      <Footer />
    </div>
  );
}

export default App;
