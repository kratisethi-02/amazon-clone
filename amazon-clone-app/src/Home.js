
import React from "react";

import "./Home.css";
import Product from "./Product";


function Home() {
  return (
    <div className="home">
      <div className="home__container">
    
      <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        
        <div className="home__row">
          <Product
            id="123456780"
            title="The Lean Startup:How Constant Innovation Creates Radically Successfl Buisness Paperback"
            price={19.99}
            image="https://www.mudamasters.com/sites/default/files/riesleanstartup.jpg"
            rating={5}
          />
          <Product
            id="123456781"
            title="Kenwood kMix Stand Mixer for baking ,Styling Kitchen Mixer with K-beater,Dough Hook and whisk,5liter Glass Bowl"
            price={239.11}
            rating={4}
            image="https://www.kenwoodworld.com/WebImage/Global/New%20products/1_KW_kMix_White_Award_800x600.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="123456782"
            title="Acer Nitro 5 AN515-55-53E5 Gaming Laptop"
            price={805.51}
            rating={4}
            image="https://m.media-amazon.com/images/I/71m03KItMZL._AC_SL1500_.jpg"
          />
          <Product
            id="123456783"
            title="OnePlus Watch | Midnight Black | 4GB"
            price={159.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/51-PGlCDyTS._AC_SL1200_.jpg"
          />
          <Product
            id="123456784"
            title="Apple iPhone 11 Pro, 256GB, Midnight Green - Fully Unlocked (Renewed Premium)"
            price={659.50}
            rating={4}
            image="https://m.media-amazon.com/images/I/81AaNJqE+wS._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="123456785"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Moniter - Super Ultra Wide Dual WQHD 5120 X 1440 "
            price={1109.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71LJJrKbezL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="123456786"
            title="PESCA 25 Bubble Ball String LED Fairy "
            image="https://m.media-amazon.com/images/I/61z8jn5B7ZL._SL1001_.jpg"

            price={5.54}
            rating={4}
          />
          <Product
            id="123456787"
            title="ILU® Dream Catcher with Lights, Wall Hangings "
            price={3.99}
            image="https://m.media-amazon.com/images/I/81a4sXq6N4L._SX425_.jpg"
            rating={3}
          />
          <Product
            id="123456788"
            title="Fossil
            Analog Rose Gold Dial Women's Watch-ES4318"
            price={131.99}
            image="https://m.media-amazon.com/images/I/71wbPdAZKrL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="123456789"
            title="Lino Perros Faux Leather handbag"
            price={95.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/6151MAuWlzL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="123456790"
            title="Crocs Unisex-Adult Classic Clog"
            price={20.99}
            image="https://m.media-amazon.com/images/I/71mLogDLFsL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="1234567891"
            title="Marc Loire Women's Comfortable Leather Slip On Fashion Transparent straps"
            price={79.55}
            rating={5}
            image="https://m.media-amazon.com/images/I/51-H+HC-nsL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1234567892"
            title="Nikon Digital Camera Z 5 Body Only"
            price={1432.99}
            image="https://m.media-amazon.com/images/I/91uPCnMOh4L._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
          
        </div>
      
      </div>
      
    </div>
    

    
  );
}

export default Home;
