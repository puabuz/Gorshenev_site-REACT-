import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Contacts from "./Components/Contacts/Contacts";
import Afisha from "./Components/Afisha/Afisha";
// import News from "./Components/News/News";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="wraper_content">
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Afisha />} />
            <Route path="/contacts" element={<Contacts />} />
            {/* <Route path="/news" element={<News />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
