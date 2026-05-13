import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Cachoeiras } from "./components/sections/Cachoeiras";
import { BelasPaisagens } from "./components/sections/BelasPaisagens";
import { Gastronomia } from "./components/sections/Gastronomia";
import { Trilhas } from "./components/sections/Trilhas";
import { ParqueNacional } from "./components/sections/ParqueNacional";
import { SalveCanastra } from "./components/sections/SalveCanastra";
import { PontosTuristicos } from "./components/sections/PontosTuristicos";
import { Hospedagens } from "./components/sections/Hospedagens";
import { Localizacao } from "./components/sections/Localizacao";

function App() {
  return (
    <div className="min-h-screen bg-canastra-cream">
      <Navbar />
      <main>
        <Hero />
        <Cachoeiras />
        <BelasPaisagens />
        <Gastronomia />
        <Trilhas />
        <ParqueNacional />
        <SalveCanastra />
        <PontosTuristicos />
        <Hospedagens />
        <Localizacao />
      </main>
      <Footer />
    </div>
  );
}

export default App;
