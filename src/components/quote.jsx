import React from 'react'
import '../css/quote.css'

function Quote() {
  return (
    <section className="quote_section layout_padding">
      <div className="container">
        <div className="box">
          <div className="detail-box">
            <h3>
              Get Your Quote Today!
            </h3>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page
            </p>
          </div>
          <div className="btn-box">
            <a href="">
              Get A Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quote