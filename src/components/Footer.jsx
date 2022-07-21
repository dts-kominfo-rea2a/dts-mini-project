import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <section>
          <span>Audio and Subtitles</span>
          <span>Media Center</span>
          <span>Security</span>
          <span>Contact Us</span>
          <span className="box">Service Code</span>
          <span>&copy; 2022 Movies, All Right Reserved</span>
        </section>
        <section>
          <span>Audio Description</span>
          <span>Investor Relations</span>
          <span>Legal Provisions</span>
        </section>
        <section>
          <span>Help Center</span>
          <span>Jobs</span>
          <span>Cookie Preferences</span>
        </section>
        <section>
          <span>Gift Cards</span>
          <span>Terms of Use</span>
          <span>Corporate Information</span>
        </section>
      </div>
    </div>
  );
}

export default Footer;
