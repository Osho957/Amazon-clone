import React from 'react';
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <img 
            className="home_img"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
            />
               
            <div className="home_row">
            <Product 
            id="1432"
            title="iOptimum Nutrition (ON) 100% Whey Protein Powder - 1.85 lbs, 837 g (Chocolate Milkshake)"
            price={8000}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61oOKRcF9XL._SL1408_.jpg"
            />
            
             <Product 
            id="1431"
            title="Allen Solly Men's Polo"
            price={900}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81L9f1n4pGL._SX569._SX._UX._SY._UY_.jpg"
            />
            
            </div>
            <div className="home_row">
            <Product 
            id="1432"
            title="Fire TV Stick 4K with All-New Alexa Voice Remote | Streaming Media Player"
            price={6000}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41f8SNPlVwL._SY300_.jpg"
            />
            
             <Product 
            id="1431"
            title="Apple iPhone 11 (64GB) - White"
            price={60000}
            rating={5}
            image="data:image/webp;base64,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"
            />
            <Product 
            id="1431"
            title="Apple iPhone 11 Pro (64GB) - Space Grey"
            price={90000}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61m6DjujESL._SX679_.jpg"
            />
            </div>
            <div className="home_row">
            <Product 
            id="1431"
            title="Samsung 216 cm (85 inches) 8K Smart QLED TV QA85Q950TSKXXL (Stainless Steel) (2020 Model) | With Quantum 8K Processor"
            price={1599999}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81qr4KSmK9L._SX522_.jpg"
            />
            </div>
              
            
            </div>
      
    );
}

export default Home
