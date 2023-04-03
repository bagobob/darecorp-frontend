import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from "./locales/en.json";
import frTranslation from "./locales/fr.json";



i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation : enTranslation
    },
    fr: {
      translation: frTranslation,
    },
  },
  lng: 'fr',
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false,
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


