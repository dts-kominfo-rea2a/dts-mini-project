import "./Footer.css";
import { Container, Button } from "@mui/material";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container className="footer__container" maxWidth="lg">
          <div className="footer__content">
            <div className="footer__content__box">
              <ul>
                <li>Audio and Subtitles</li>
                <li>Media Center</li>
                <li>Security</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="footer__content__box">
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Provisions</li>
              </ul>
            </div>
            <div className="footer__content__box">
              <ul>
                <li>Help center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
              </ul>
            </div>
            <div className="footer__content__box">
              <ul>
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
              </ul>
            </div>
          </div>
          <div className="footer__action">
            <Button variant="outlined" color="success">
              Service Code
            </Button>
          </div>
          <div className="footer__copyright">
            <span>
              Made with ❤️ By Pair 57 &copy; 2022 Movies, All Right
              Reserved.
            </span>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
