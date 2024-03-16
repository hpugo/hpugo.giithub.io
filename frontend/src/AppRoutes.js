import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShoePage from "./pages/ShoePage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/ReigsterPage";
import AuthRoute from "./components/AuthRoute";
import CheckoutPage from "./pages/CheckoutPage";
import PendingPage from "./pages/PendingPage";
import NotFound from "./components/NotFound";

export default function AppRoutes() {
    return <Routes>
        <Route path="/" element={<HomePage/> }/>
        <Route path="/*" element={<NotFound/> }/>
        <Route path="/search/:searchTerm" element={<HomePage />} />
        <Route path="/size/:size" element={<HomePage />} />
        <Route path="/shoes/:id" element={<ShoePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/checkout" element={<AuthRoute>
            <CheckoutPage />
        </AuthRoute>} />
        <Route path="/payment" element={<PendingPage />}/>

    </Routes>;
}