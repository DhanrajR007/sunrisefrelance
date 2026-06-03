import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import "./footer.css";

export default function Footer() {
  return (
    <footer id="admissions" className="footer">
      <div className="footer-container">

        {/* Left */}
        <div className="footer-brand">
          <h2>Sunrise High Secondary School</h2>

          <p>
            Inspiring curious minds, nurturing character,
            and preparing future leaders for a changing world.
          </p>

          <div className="footer-socials">
            <a href="https://www.instagram.com/sunrise_high_school.palsud?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="  target="_blank"
  rel="noopener noreferrer">
              <FaInstagram />
            </a>

            <a href="#">
              <FaYoutube />
            </a>

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Center */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#vision">Our Vision</a>
          <a href="#academics">Academics</a>
          <a href="#admissions">Admissions</a>
          <a href="#campus">Campus Life</a>
        </div>

        {/* Right */}
        <div className="footer-contact">
          <h3>Contact</h3>

          <div className="contact-item">
            <FaPhoneAlt />
            <span>+91 98765 43210</span>
          </div>

          <div className="contact-item">
            <MdEmail />
            <span>info@lyceum.edu</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <a href="https://www.google.com/maps/place/SUNRISE+HIGH+SCHOOL,PALSUD/@21.8270981,74.9611206,17z/data=!3m1!4b1!4m6!3m5!1s0x3bdf551c306c260f:0x4035a9bddde70875!8m2!3d21.8270981!4d74.9636955!16s%2Fg%2F11s63k62hn?entry=ttu&g_ep=EgoyMDI2MDUzMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
              <span>Sunrise High Secondary School, Palsud, Badwani, M.P India</span>
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Sunrise High Secondary School Palsud. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}