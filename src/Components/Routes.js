import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Four404 from "../pages/Four404";
import Main from "../pages/Main";
import Login from "../pages/Login";
import MyAccount from "../pages/MyAccount";
import ProductDetail from "../pages/ProductDetail";
import Dashboard from "../pages/user_panel/Dashboard";
import PrurchasedItem from "../pages/user_panel/PurchasedItem";
import Withdraw from "../pages/user_panel/Withdraw";
import Tracking from "../pages/user_panel/Tracking";
import ChangePassword from "../pages/user_panel/ChangePassword";
import Messages from "../pages/user_panel/Messages";
import Disputs from "../pages/user_panel/Disputs";
import EditProfile from "../pages/user_panel/EditProfile";
import FavoriteReseller from "../pages/user_panel/FavoriteReseller";
import Tickets from "../pages/user_panel/Tickets";
import WithdrawNow from "../pages/user_panel/WithdrawNow";
import Wishlist from "../pages/Wishlist";
import Compare from "../pages/Compare";
import Register from "../pages/Register";


function Routs() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path='/' element={< Layout />} /> */}
        <Route path="*" element={<Four404/>} />
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/product-detail" element={<ProductDetail/>} />
        <Route exact path="/my-account" element={<MyAccount/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path="/order" element={<PrurchasedItem/>} />
        <Route exact path="/withdraw" element={<Withdraw/>} />
        <Route exact path="/tracking" element={<Tracking/>} />
        <Route exact path="/change-password" element={<ChangePassword/>} />
        <Route exact path="/messages" element={<Messages/>} />
        <Route exact path="/disputs" element={<Disputs/>} />
        <Route exact path="/edit-profile" element={<EditProfile/>} />
        <Route exact path="/favorite-reseller" element={<FavoriteReseller/>} />
        <Route exact path="/tickets" element={<Tickets/>} />
        <Route exact path="/withdraw/create" element={<WithdrawNow/>} />
        <Route exact path="/wishlist" element={<Wishlist/>} />
        <Route exact path="/compare" element={<Compare/>} />
      </Routes>
    </Router>
  )
}

export default Routs;