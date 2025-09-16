import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
// Add your imports here
import Homepage from "./pages/homepage";
import LoginRegistration from "./pages/login-registration";
import ServiceOfferings from "./pages/service-offerings";
import ShoppingCartCheckout from "./pages/shopping-cart-checkout";
import ProductDetail from "./pages/product-detail";
import UserAccountDashboard from "./pages/user-account-dashboard";
import NotFound from "./pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/login-registration" element={<LoginRegistration />} />
        <Route path="/service-offerings" element={<ServiceOfferings />} />
        <Route path="/shopping-cart-checkout" element={<ShoppingCartCheckout />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/user-account-dashboard" element={<UserAccountDashboard />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
