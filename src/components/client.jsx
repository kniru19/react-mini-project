import React from 'react'
import '../css/client.css'
import img from '../assets/images/client.jpg'

function Client() {
  return (
    <section className="client_section layout_padding-top">
      <div className="d-flex justify-content-center">
        <div className="heading_container">
          <h2>
            Testimonial
          </h2>
        </div>
      </div>
      <div className="container layout_padding2">
        <div id="carouselExample2Indicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExample2Indicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExample2Indicators" data-slide-to="1"></li>
            <li data-target="#carouselExample2Indicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item">
              <div className="client_container">
                <div className="client-id">
                  <div className="img-box">
                    <img src={img} alt="" />
                  </div>
                  <div className="client_name">
                    <div>
                      <h3>
                        Johndue
                      </h3>
                      <p>
                        Farm & CO
                      </p>
                    </div>
                  </div>
                </div>
                <div className="client_detail">
                  <div className="client_text">
                    <blockquote>
                      <p>
                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <div className="client_container">
                <div className="client-id">
                  <div className="img-box">
                    <img src={img} alt="" />
                  </div>
                  <div className="client_name">
                    <div>
                      <h3>
                        Johndue
                      </h3>
                      <p>
                        Farm & CO
                      </p>
                    </div>
                  </div>
                </div>
                <div className="client_detail">
                  <div className="client_text">
                    <blockquote>
                      <p>
                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="client_container">
                <div className="client-id">
                  <div className="img-box">
                    <img src={img} alt="" />
                  </div>
                  <div className="client_name">
                    <div>
                      <h3>
                        Johndue
                      </h3>
                      <p>
                        Farm & CO
                      </p>
                    </div>
                  </div>
                </div>
                <div className="client_detail">
                  <div className="client_text">
                    <blockquote>
                      <p>
                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Client 