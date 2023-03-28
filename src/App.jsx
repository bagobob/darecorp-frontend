import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Devis from './pages/Devis';
import DetailServices from './pages/DetailServices';
import ServiceProduct from "./components/ServiceProduct"
import {
  createRoutesFromElements,
  createBrowserRouter, Route, RouterProvider
} from "react-router-dom";
import { serviceData } from "./data/servicesData";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
        path="/"
        element={<Home />}
        errorElement={<ErrorPage />}
      />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/service"
          element={<Service />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/devis"
          element={<Devis />}
        />
        <Route
          path="/services"
          element={<DetailServices />}
          >
          <Route
            path="/services/web_development"
            element={<ServiceProduct title="Web Development" feature={serviceData['webData'].feature} />}
          />
          <Route
            path="/services/design"
            element={<ServiceProduct title="Design" feature={serviceData['designData'].feature} />}
          />
          <Route
            path="/services/it_consult"
            element={<ServiceProduct title="IT Consultation" feature={serviceData['consultItData'].feature} />}
          />
          <Route
            path="/services/app_development"
            element={<ServiceProduct title="Application Development" feature={serviceData['appData'].feature} />}
          />
        </Route>
      </>
      
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
