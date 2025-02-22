import React from 'react';
import '../css/slider.css';

function Slider () {
  return (
    <section className="slider_section position-relative">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">01</li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <div>
                      <h1>
                        Welcome To <br />
                        <span>
                          Content Writing Services
                        </span>
                      </h1>
                      <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn-1">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <div>
                      <h1>
                        Welcome To <br />
                        <span>
                          Content Writing Services
                        </span>
                      </h1>
                      <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn-1">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="custom_carousel-control">
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Slider;