import { useEffect, useState } from "react";
import Navbar from "./Component/Fragment/Navbar";
import Sidebar from "./Component/Fragment/Sidebar";
import CardList from "./Component/Fragment/CardList";
import Pricing from "./Component/Fragment/Pricing";

function App() {
  const [hambActive, setHambActive] = useState(false);
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div>
      <Navbar hambActive={hambActive} setHambActive={setHambActive} />
      <Sidebar hambActive={hambActive} />
      <main className="container">
        <Pricing setIsYearly={setIsYearly} isYearly={isYearly} />
        <CardList isYearly={isYearly} />
      </main>
    </div>
  );
}

export default App;
