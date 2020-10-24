import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-CA_ENG_PVD5581._CB403140241_.jpg"
        alt="photo"
      />

      <Product
        id="12321341"
        title="The Art Of War."
        price={4.47}
        rating={5}
        image="https://m.media-amazon.com/images/I/41BYT1dc4QL.jpg"
        alt="book"
      />
    </div>
  );
}

export default Home;
