import React, { Fragment } from 'react'
import "../layout/Footer.css"

const Footer = () => {
    return (
        <Fragment>
            {/* <footer className="py-1">
                <p className="text-center mt-1">
                    Shopping Cart - 2019-2020, All Rights Reserved
                </p>
            </footer> */}
            <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Coco<span>cart</span>
          </h3>

          <p className="footer-links">
            <a href="#" className="link-1">
              Home
            </a>

            <a href="#">Blog</a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p className="footer-company-name">Cococart © 2022</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Madduvil North,</span> Chavakachcheri, Jaffna
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>0768921236</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">cococart@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the cococart</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className="footer-icons">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
        </Fragment>
    )
}

export default Footer
