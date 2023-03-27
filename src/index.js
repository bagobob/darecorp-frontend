import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from "./locales/en.json";
import frTranslation from "./locales/fr.json";
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Devis from './pages/Devis';



i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation : enTranslation
    },
    fr: {
      translation: frTranslation,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/service",
    element: <Service />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/devis",
    element: <Devis />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


