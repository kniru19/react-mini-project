import React from 'react'
import '../css/info.css'
import img1 from '../assets/images/location.png'
import img2 from '../assets/images/call.png'
import img3 from '../assets/images/envelope.png'

function Info() {
  return (
    <section className="info_section layout_padding">
      <div className="container">
        <div className="info_items">
          <a href="">
            <div className="item">
              <div className="img-box box-1">
                <img src={img1} alt="" />
              </div>
              <div className="detail-box">
                <p>
                  Espoo, Finland
                </p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="item">
              <div className="img-box box-2">
                <img src={img2} alt="" />
              </div>
              <div className="detail-box">
                <p>
                  Call +358 1234567890
                </p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="item">
              <div className="img-box box-3">
                <img src={img3} alt="" />
              </div>
              <div className="detail-box">
                <p>
                  demo@gmail.com
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Info