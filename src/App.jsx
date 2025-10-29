import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} title="Fase de Presentación" /> 
      <Services data={landingPageData.Services} title="Fase de Planificación" />
      <Features data={landingPageData.Ejecucion} title="Fase de Desarrollo y Diseño" />
      <Features data={landingPageData.QA} title="Fase de Control de Calidad y Evaluación de Costos" />
      <Services data={landingPageData.Cierre} title="Fase de Cierre" />
      <Team data={landingPageData.Team} />
    </div>
  );
};

export default App;
