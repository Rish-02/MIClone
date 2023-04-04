import './App.css';
import Navbar from './components/Navbar.js'
import Slider from "./components/Slider.js"
import {BrowserRouter as Router, Route}  from "react-router-dom";
import pkg from './data/data.json';
import Offers from './components/Offers';
import data from './data/data.json';
import StarProduct from './components/StarProduct';
import Heading from './components/Heading.js';
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import ProductReviews from "./components/ProductReviews";
// import ContactUs from './components/contact';
import Banner from "./components/Banner.js"

function App() {

  return (
    <Router>
      <Navbar />
      <Slider start={pkg.banner.start} />
      <Offers offer={data.offer}/>
      <Heading text="STAR PRODUCTS"/>
      <StarProduct StarProduct={data.starProduct} />

      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

      <Heading text="PRODUCT REVIEWS"/>
      <ProductReviews productReviews={data.productReviews }/>
      
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner}/> 

      </Router>
  );
}

export default App;
