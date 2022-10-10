import "./style/App.css";


import Topbar from "./topbar";
import Topbar2 from "./componnents/Topbar_2";
import Head from "./componnents/Head";
import Shop from "./componnents/Shop";
import Items from "./componnents/Items";
import Deal from "./componnents/Deal";
import Footer from "./componnents/Footer";

function App() {
  return (
    <div className="container-fluid">
      <Topbar />
      <Topbar2 />
      <Head />
      <Shop />
      <Items />
      <Deal />
      <Footer />
    </div>
  );
}

export default App;

