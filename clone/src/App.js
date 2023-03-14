import "./styles/styles.css";
// components
import {
  Navbar,
  Hero,
  FeatureIndex,
  FAQIndex,
  Footer,
} from "./components/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <FeatureIndex />
      <FAQIndex />
      <Footer />
    </div>
  );
}

export default App;
