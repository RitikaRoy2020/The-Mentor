import React from 'react';

export const Hero = (props) => {
  return(
    <section id="hero" class="d-flex justify-content-center align-items-center">
      <div class="container position-relative" data-aos="zoom-in" data-aos-delay="100">
        <h1>{props.content.Introduction}</h1>
        <h2>{props.content.Heading}</h2>
        <a href="courses.html" class="btn-get-started">Get Started</a>
      </div>
    </section>
  );
}