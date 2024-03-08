import "./App.css";

import Destinations from "./components/Destinations";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Book from "./components/Book";
import Travel from "./components/Travel";
import Footer from "./components/Footer";
import ReactSlick from "./components/ReactSlick";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Destinations />
      <Travel />
      <Book />

      <ReactSlick />
      <Footer />
    </div>
  );
}

export default App;
