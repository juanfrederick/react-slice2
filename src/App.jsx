import { useEffect, useState } from "react";
import Navbar from "./Component/Fragment/Navbar";
import Sidebar from "./Component/Fragment/Sidebar";
import CardList from "./Component/Fragment/CardList";
import Pricing from "./Component/Fragment/Pricing";
import Feature from "./Component/Fragment/Feature";
import StartNow from "./Component/Fragment/StartNow";
import Questions from "./Component/Fragment/Questions";
import Background from "./Component/Element/Background";
import Footer from "./Component/Fragment/Footer";

function App() {
  const [hambActive, setHambActive] = useState(false);
  const [isYearly, setIsYearly] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1000) {
        setHambActive(false);
      }
    });
  }, []);

  return (
    <div>
      <Background />
      <Navbar hambActive={hambActive} setHambActive={setHambActive} />
      <Sidebar hambActive={hambActive} />
      <main className="container">
        <Pricing setIsYearly={setIsYearly} isYearly={isYearly} />
        <CardList isYearly={isYearly} />
        <Feature />
        <StartNow />
        <Questions />
        <Footer />
      </main>
    </div>
  );
}

export default App;
