import React from "react";
import { Routes, Route } from "react-router-dom";
// import datafake from "./datafake.json";
import datafake from "./datanot.json";


import "./App.css";

import Header from "./components/widgets/Header.jsx";
// import Home from "./page/Home";

// import PersonalOffice from "./components/PersonalOffice/PersonalOffice";

// import About from './About/About';
import Footer from "./components/widgets/Footer";
// import Notarius from "./page/Notarius";
import Home from "./page/Home";
import NotariusPersonalOffice from "./page/NotariusPersonalOffice";
import ForСitizens from "./page/ForСitizens";
import ForNotaries from "./page/ForNotaries";
import NotarialActs from "./page/NotarialActs";
import Hero from "./components/widgets/Hero";
// import NotFound from './NotFound/NotFound';

export const App = () => {

  // const products = datafake.products;
  const notaries = datafake.notaries;
  return (
    <div className="app_wrapper relative">
      <Header />
      {/* <Home/> */}
        <Hero/>
      <Routes>
      {/* <Router> */}
        {/* <Switch> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/notarius" element={<Notarius />} />
          <Route path="/notarius/:id" element={<NotariusPersonalOffice products={products} />} /> */}
          {/* <Route path="/" element={<Notarius />} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/:id" element={<NotariusPersonalOffice products={products} />} /> */}
          <Route path="/:id" element={<NotariusPersonalOffice notaries={notaries} />} />
          
          <Route path="/forcitizens" element={<ForСitizens />} />
          <Route path="/fornotaries" element={<ForNotaries />} />
          <Route path="/notarialacts" element={<NotarialActs />} />
          

          {/* <Route path="*" element={<NotFound />} /> */}
        {/* </Switch> */}
      {/* </Router> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
