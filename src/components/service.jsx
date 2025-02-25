import React from 'react'
import '../css/service.css'
import img1 from '../assets/images/s-1.png'
import img2 from '../assets/images/s-2.png'
import img3 from '../assets/images/s-3.png'
import img4 from '../assets/images/s-4.png'

function Service() {
  return (
    <section className="service_section">
    
      
  <div className="container">
    <div className="heading_container">
      <h2>
        At Your Service
      </h2>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="box">
          <div className="img-box">
            <img src={img1} alt="" />
          </div>
          <h4>
            Written with Love
          </h4>
          <p>
            It is a long established facts that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content t,
          </p>
          <a href="">
            Read More
          </a>
        </div>
      </div>
      <div className="col-md-6">
        <div className="box align-items-end align-items-md-start text-right text-md-left">
          <div className="img-box">
            <img src={img2} alt="" />
          </div>
          <h4>
            Fast Turnaround
          </h4>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making it look like
          </p>
          <a href="">
            Read More
          </a>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="box">
          <div className="img-box">
            <img src={img3} alt="" />
          </div>
          <h4>
            Up to Date
          </h4>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making it look like now use Lorem Ipsum as
            their default model text,
          </p>
          <a href="">
            Read More
          </a>
        </div>
      </div>
      <div className="col-md-6">
        <div className="box align-items-end align-items-md-start text-right text-md-left">
          <div className="img-box">
            <img src={img4} alt="" />
          </div>
          <h4>
            Premium Content
          </h4>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making it look like
          </p>
          <a href="">
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    
  )
}

export default Service;
