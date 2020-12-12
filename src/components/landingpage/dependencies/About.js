import React from 'react';

export const About = (props) => {
  return (
    <div>
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>About</h2>
            <p>About Us</p>
          </div>
          <div class="row">
            <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
              <img src="assets/img/about.jpg" class="img-fluid" alt="" />
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>{props.content.Heading}</h3>
              <p class="font-italic">
                {props.content.Body1}
              </p>
              <ul>
                <li><i class="icofont-check-circled"></i> {props.content.Body3}</li>
                <li><i class="icofont-check-circled"></i> {props.content.Body4}</li>
                <li><i class="icofont-check-circled"></i> {props.content.Body5}</li>
              </ul>
              <p>
                {props.content.Body2}
              </p>
              <a href="about.html" class="learn-more-btn">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}