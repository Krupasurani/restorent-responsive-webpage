import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import History from "./Component/History";
import Special from "./Component/Special";
import Chef from "./Component/Chef";
import Videof from "./Component/Videof";
import Award from "./Component/Award";
import Gallery from "./Component/Gallery";
import Findus from "./Component/Findus";
import Last from "./Component/Last";


const linksArray= ["Home","Pages","Contact Us","Blog", "Landing"];
function App() {
  return (
    <div >
      <Navbar links={linksArray} />
    
       
       <Hero />
       <History />
       <Special />
       <Chef />
       <Videof />
       <Award />
       <Gallery />
       <Findus />
       <Last />
    </div>


    
);
};

export default App;

  