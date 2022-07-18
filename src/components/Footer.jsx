import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center  bg-neutral text-gray-300">
      <div className="mx-60 py-10 ">
        <div className="grid grid-2 md:grid-cols-4 md:text-left">
          <div className="mb-4 flex flex-col justify-center md:justify-start">
            <Link to="#">Audio and Subtitles</Link>
            <Link to="#">Media Center</Link>
            <Link to="#">Security</Link>
            <Link to="#">Contact Us</Link>
          </div>
          <div className="mb-4 flex flex-col justify-center md:justify-start">
            <Link to="#">Audio Description</Link>
            <Link to="#">Investor relations</Link>
            <Link to="#">Legal Provisions</Link>
          </div>
          <div className="mb-4 flex flex-col justify-center md:justify-start">
            <Link to="#">Help Center</Link>
            <Link to="#">Jobs</Link>
            <Link to="#">Cookie Preferences</Link>
          </div>
          <div className="mb-4 flex flex-col justify-center md:justify-start">
            <Link to="#">Gift Code</Link>
            <Link to="#">Terms of Use</Link>
            <Link to="#">Corporate Information</Link>
          </div>
          <div>
            <button className="border-2 border-solid border-gray-500 px-4 py-2">Service Code</button>
          </div>
        </div>
        <div className="text-left pt-4 text-xs">
          <span>© 2022 Movies, All Right Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
