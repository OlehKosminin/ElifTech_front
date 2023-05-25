import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navbar from "./modules/NavBar";
import ShopPage from "./pages/ShopPage";

import NotFoundPage from "pages/NotFoundPage";

export const App = () => {
  return (
    <BrowserRouter basename="/">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<>Main pages</>}></Route> */}
        <Route path="/" element={<ShopPage />}>
          <Route path="mcdonalds" element={<ShopPage />} />
          <Route path="burger-king" element={<ShopPage />} />
          <Route path="il-molino" element={<ShopPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
