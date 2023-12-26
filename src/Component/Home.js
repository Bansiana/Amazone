import React from "react";
import "./Home.css";
// import Home from '../Component/Home'
import Prodact from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71-xs7rzA-L._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Prodact
            id="12321341"
            title="The lean Startup How Constant Irnovatin Creates"
            price={60.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/home/email/StorageOrg/HomeQ42023_Dec_HP_StorageOrg_QuadCard_Entryway_D_03_186x116_1x._SY116_CB573629259_.jpg" 
            alt=""
          />

          <Prodact
            id="12321341"
            title="The lean Startup How Constant Irnovatin Creates"
            price={16.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/SITE_FLIPS/HOLIDAY23/GW/NOV/CC/HOL_MOB_CATCARD_1X._SY304_CB571914728_.jpg"
            alt=""
          />

          <Prodact
            id="12321341"
            title="The lean Startup How Constant Irnovatin Creates"
            price={32.96}
            rating={4}
            image="https://m.media-amazon.com/images/I/61Jmz08At7L._AC_SY200_.jpg"
            class="product-image"
            height="200px"
            data-a-hires="https://m.media-amazon.com/images/I/61Jmz08At7L._AC_SY400_.jpg"
            alt=""
          />
        </div>
        <div className="home__row">
          <Prodact
            id="12321341"
            title="The lean Startup How Constant Irnovatin Creates"
            price={24.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/home/email/StorageOrg/HomeQ42023_Dec_HP_StorageOrg_QuadCard_Entryway_D_03_186x116_1x._SY116_CB573629259_.jpg" 
          />
          <Prodact
            id="12321341"
            title="The lean Startup How Constant Irnovatin Creates"
            price={150.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/91n7p-j5aqL._AC_SY200_.jpg" class="product-image" height="200px" data-a-hires="https://m.media-amazon.com/images/I/91n7p-j5aqL._AC_SY400_.jpg"
          />
          <Prodact
            id="12321341"
            title="The lean Startup How Constant Irnovatin Creates"
            price={75.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/us-manual-merchandising/RBS-in-house-Graphics/acc-d-des-1x-CUTTLE_379x304_3570650._SY304_CB571148001_.jpg" 
            
          />
          <Prodact
            id="12321341"
            title="The lean Startup How Constant Irnovatin Creates"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2023/Shoulder/Batch2/GW/CC/SP23_95_GW_CatCard_DT_LMDeals_1x._SY304_CB572647858_.jpg"
          />
        </div>
        <div className="home__row">
          <Prodact
            id="12321341"
            title="The lean Startup How Constant Irnovatin Creates"
            price={15.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2023/HOL23/W6_7/GW/DQC/HOL23_138_GW_DQC_LMG_WELLNESSGURU_1x._SY116_CB575184057_.jpg"
          />
          <Prodact
            id="12321341"
            title="The lean Startup How Constant Irnovatin Creates"
            price={45.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/41rjzSwJnbL._SY500__AC_SY200_.jpg"
          />
          <Prodact
            id="12321341"
            title="The lean Startup How Constant Irnovatin Creates"
            price={12.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/home/email/StorageOrg/HomeQ42023_Dec_StorageOrg_SingleCard_D_379x304_1x_V2._SY304_CB573610925_.jpg"
          />
          <Prodact
            id="12321341"
            title="The lean Startup How Constant Irnovatin Creates"
            price={29.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/home/email/StorageOrg/HomeQ42023_Dec_HP_StorageOrg_QuadCard_Kitchen_D_01_186x116_1x._SY116_CB572163942_.jpg"
          />
        </div>
        <div className="home__row">
          <Prodact
            id="12321341"
            title="The lean Startup How Constant Irnovatin Creates"
            price={55.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/41TqXHG7-cL._SY160_.jpg" 
          />
          <Prodact
            id="12321341"
            title="The lean Startup How Constant Irnovatin Creates"
            price={81.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/home/email/StorageOrg/HomeQ42023_Dec_HP_StorageOrg_QuadCard_Closet_D_02_186x116_1x._SY116_CB573629259_.jpg" 
          />
          <Prodact
            id="12321341"
            title="The lean Startup How Constant Irnovatin Creates"
            price={19.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81ccLA8pG7L._AC_SY200_.jpg"
            class="product-image"
            height="200px"
            data-a-hires="https://m.media-amazon.com/images/I/81ccLA8pG7L._AC_SY400_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
