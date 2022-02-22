import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Four404 from "../pages/Four404";
import Main from "../pages/Main";
import ProductDetail from "../pages/ProductDetail";


function Routs() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path='/' element={< Layout />} /> */}
        <Route path="*" element={<Four404/>} />
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/product-detail" element={<ProductDetail/>} />
      </Routes>
    </Router>
  )
}

export default Routs;