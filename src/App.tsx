import { useState } from "react";
import "./App.css";
import Header from "./ListOrder/Header";
import Status from "./ListOrder/Status";
import Content from "./ListOrder/Content";
import Footer from "./ListOrder/Footer";

function App() {
  const [halaman, setHalaman] = useState(1);

  return (
    <div className="container">
      <Header />
      <Status halaman={halaman} setHalaman={setHalaman} />
      <Content halaman={halaman} />
      <Footer />
    </div>
  );
}

export default App;
