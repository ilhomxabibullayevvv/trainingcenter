import AboutIntro from "../components/AboutPage/AboutIntro";
import ComfortTraining from "../components/AboutPage/ComfortTraining";
import Achievements from "../components/AboutPage/Achievements";
import WhyUs from "../components/AboutPage/WhyUs";
import Trainers from "../components/AboutPage/Trainers";
import Reviews from "../components/AboutPage/Reviews";

export default function AboutPage() {
  return (
    <>
      <main>
        <AboutIntro />
        <ComfortTraining />
        <Achievements />
        <WhyUs />
        <Trainers />
        <Reviews />
      </main>
    </>
  );
}
