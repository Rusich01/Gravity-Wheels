import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutRoot from "@/app/layout/layout-root";
import HomePage from "@/pages/home-page";
import BikesPage from "@/pages/bikes-page";
import AboutPage from "@/pages/about-page";
import ContactPage from "@/pages/contact-page";
import NotFoundPage from "@/pages/not-found-page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutRoot />}>
          <Route index element={<HomePage />} />
          <Route path="bikes" element={<BikesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
