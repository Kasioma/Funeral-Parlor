import Hero from "./components/hero";
import Header from "./components/header";
import Partnerships from "./components/partnerships";
import FirstService from "./components/firstService";
import SecondService from "./components/secondService";
import Accordion from "./components/accordion";
import Reviews from "./components/reviews";
import Contact from "./components/contact";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Partnerships />
      <FirstService />
      <SecondService />
      <Accordion />
      <Reviews />
      <Contact />
    </>
  );
};

export default App;
