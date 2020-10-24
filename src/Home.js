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

      <div className="home__row">
        <Product
          id="12321341"
          title="BULZER Grid Wire Panel Board,Wall Picture Decoration for Room Clip Photo Holder Photograph Mat Hanging Art Display Frames Desk Storage Organizer"
          price={28.04}
          rating={5}
          image="https://m.media-amazon.com/images/I/71H2gU-7abL._SR149,210_.jpg"
          alt="board"
        />

        <Product
          id="12321341"
          title="Oculus Rift S PC-Powered VR Gaming Headset - Windows and Controllers Accessories Travel Bag (Gray)"
          price={549.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/51odsYyURHL._AC_UL320_.jpg"
          alt="vr headset"
        />
      </div>

      <div className="home__row">
        <Product
          id="12345678"
          title="The Art Of War."
          price={4.47}
          rating={5}
          image="https://m.media-amazon.com/images/I/41BYT1dc4QL.jpg"
          alt="book"
        />

        <Product
          id="12321341"
          title="Monitor Stand Riser with Hub, USB 3.0 Ports and Type C Port, Desktop Stand Support Fast Charging and Transfer Data"
          price={64.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71pay-L7MPL._AC_UL160_SR160,160_.jpg"
          alt="stand"
        />

        <Product
          id="12321341"
          title="PreSonus Eris E4.5 2-Way Powered Studio Monitor - Eris-e4.5"
          price={299.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/81Hs23FJqzL._AC_UL320_.jpg"
          alt="speakers"
        />
      </div>

      <div className="home__row">
        <Product
          id="12321341"
          title="LG 49SM8600PUA Nano 8 Series 49inches 4K Ultra HD Smart LED NanoCell TV (2019), Black (Renewed)"
          price={679.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/81ulMUKm6ZL._AC_UL320_.jpg"
          alt="tv"
        />
      </div>
    </div>
  );
}

export default Home;
