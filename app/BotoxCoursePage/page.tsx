import BotoxDescription from "../components/BotoxCoursePage/BotoxDescription";
import BotoxHero from "../components/BotoxCoursePage/BotoxHero";
import CourseProgram from "../components/BotoxCoursePage/CourseProgram";
import EarlyRegistration from "../components/BotoxCoursePage/EarlyRegistration";
import Trainer from "../components/BotoxCoursePage/Trainer";
import WhatYouLearn from "../components/BotoxCoursePage/WhatYouLearn";
import LanguageContext from "../components/BotoxCoursePage/LanguageContext";

export default function BotoxCoursePage() {
  return (
    <>
      <BotoxHero />
      <BotoxDescription />
      <CourseProgram />
      <WhatYouLearn />
      <Trainer />
      <EarlyRegistration />
      <LanguageContext />
    </>
  );
}
