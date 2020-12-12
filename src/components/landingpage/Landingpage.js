import React from 'react';
import {About, Hero, WhyUs} from './dependencies';

let heroContent = {
  Introduction: "Learning Today,   Leading Tomorrow",
  Heading: "We are team of talanted designers making websites with Bootstrap"
};

let whyUsContent = {
  Heading1: "Why Choose Mentor?",
  Heading2: "Corporis voluptates sit",
  Heading3: "Ullamco laboris ladore pan",
  Heading4: "Labore consequatur",
  Body1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.",
  Body2: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
  Body3: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
  Body4: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere"
};

let aboutContent = {
  Introduction: "Happy to meet your need!",
  Heading: "We care about you.",
  Body1: "We are a bunch of qualified mentors in Web Development. Specializing in Angular js, React js and Node js.",
  Body2: "Aliquip out of her the advantage of stimulus efforts if the school district as a problem. But consumer cupidatat homework to find pleasure",
  Body3: "We offer popular courses like Web Design, Search Engine Optimazation, Copy Writing etc.",
  Body4: "Duis aute irure dolor in reprehenderit in voluptate velit.",
  Body5: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur."
};

function LandingPage() {
  return(
    <React.Fragment>
      <About content={aboutContent} />
      <Hero content={heroContent}/>
      <WhyUs content={whyUsContent} />
    </React.Fragment>
  );
}
export default LandingPage;