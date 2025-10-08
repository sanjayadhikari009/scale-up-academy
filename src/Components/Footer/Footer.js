import React from 'react';
import { Link } from 'react-router-dom';
import fullWhite from "../../Photos/Icons/fullgreen.png";
import "./Footer.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import textImage from "../../Photos/Photo/OnlyText.png";
import logoOnly from "../../Photos/Photo/logoonly.png";

import facebook from "../../Photos/SocialIcons/Facebook.png";
import linkind from "../../Photos/SocialIcons/Linkind.png";
import instagram from "../../Photos/Icons/instagram.png";
import behance from "../../Photos/Icons/behance.png";
import whatsapp from "../../Photos/Icons/whatapp.png";
import tiktok from "../../Photos/Icons/tik-tok.png";


const Footer = () => {
  return (
    <div className="footerPage">
      <div className='forNiddle'><div className="needleLine"></div></div>
      <div className='footer'>
        <div className='ctabannerPage'>
          <div className='ctaBanner'>
            <span className='spant'></span>
            <span className='spanb'></span>
            <span className='spanr'></span>

            <div className='linear-gradient'></div>
            <div className='forFooter'>
              <div className='leftFooter'>
                <img src={fullWhite} alt='logo' />
              </div>
              <div className='rightFooter'>
                <div className='footerNav'>
                  <p>Navigation</p>
                  <div className='links'>

                    <div className='footerScrollLink'>
                      <div className='box'></div>
                      <Link to={"/"}>
                        <span>Home</span>
                        <span>Home</span>
                      </Link>
                    </div>
                    <div className='footerScrollLink'>
                      <div className='box'></div>
                      <Link to={"/about"}>
                        <span>About us</span>
                        <span>About us</span>
                      </Link>
                    </div>

                    <div className='footerScrollLink'>
                      <div className='box'></div>
                      <Link to={"/courses"}>
                        <span>Courses</span>
                        <span>Courses</span>
                      </Link>
                    </div>
                    <div className='footerScrollLink'>
                      <div className='box'></div>
                      <Link to={"/contact"}>
                        <span>Contact</span>
                        <span>Contact</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className='footerInfo'>
                  <div className='leftF'>
                    <p>Scaleup Academy</p>
                    <p>9816185204</p>
                    <p>Chipledhunga Pokhara</p>
                    <p>info.scaleupacademy@gmail.com</p>
                  </div>

                  <div className='rightF'>
                    <div className='socialLink'>
                      <Link target='_blank' to={"https://www.facebook.com/profile.php?id=61579107479784"}><img src={facebook} alt='icons' /></Link>
                      <Link target='_blank' to="https://www.instagram.com/scaleupacademy.co/"><img src={instagram} alt='icons' /></Link>
                      <Link target='_blank' to={"https://www.linkedin.com/in/scaleup-academy-9319b6378/"}><img src={linkind} alt='icons' /></Link>
                    </div>
                    <div className='socialLink'>
                      <Link target='_blank' to={"https://www.behance.net/scaleupacademy"}><img src={behance} alt='icons' /></Link>
                      <Link target='_blank' to={"https://api.whatsapp.com/send?phone=9779816185204&text=I%20am%20contacting%20you%20regarding%20an%20inquiry%20about%20Scaleup%20Academy.%0AName:%0ACourses:"} ><img src={whatsapp} alt='icons' /></Link>
                      <Link target='_blank' to={"https://www.tiktok.com/@scaleup_academy"}><img src={tiktok} alt='icons' /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      <div className='forNiddle'><div className="needleLine"></div></div>
      <div className='footerLast'>
        <img src={textImage} alt='text' />
        <img src={logoOnly} alt='logo' />
        <div className='linear-gradient'></div>
        <div className='footerCopyText'>
          <p>© 2025 Scaleup Academy. All rights reserved.</p>
          <Link target='_blank' to={"https://scaleupnepal.com/"}>www.scaleupnepal.com</Link>
        </div>
      </div>
    </div >
  );
};

export default Footer;
