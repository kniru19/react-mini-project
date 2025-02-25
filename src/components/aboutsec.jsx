import React from 'react';
import aboutImg from '../assets/images/about-img.png';
import '../css/aboutsec.css';

function AboutSec () {
  return (
    <section className="about_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>
                  About Us
                </h2>
              </div>
              <p>
                It is a long established  facts that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using 'Content here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem Ipsum as their
                
              </p>
              <a href="">
                Get Started
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img src={aboutImg} alt="About Us" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSec;