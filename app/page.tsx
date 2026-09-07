import Hero from "./components/Home/Hero";
import Statistics from "./components/Home/Statistics";
import About from "./components/Home/About";
import Directions from "./components/Home/Directions";
import Models from "./components/Home/Models";
import WhyUs from "./components/Home/WhyUs";
import SpecialOffers from "./components/Home/SpecialOffers";
import Callback from "./components/Home/Callback";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Statistics />
        <About />
        <Directions />
        <Models />
        <WhyUs />
        <SpecialOffers />
        <Callback />
      </main>
    </>
  );
}
