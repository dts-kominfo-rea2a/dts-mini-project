const Footer = () => {
    return (
      <section className="flex flex-col w-full gap-y-4 mb-11">
        <div className="inline-flex w-full mb-5 px-24 justify-between text-[#808080]">
          {/* first section */}
          <div className="flex flex-col gap-y-4">
            <p>Audio and Subtitles</p>
            <p>Media Center</p>
            <p>Security</p>
            <p>Contact us</p>
            <button className="flex border max-w-fit border-[#808080] px-4 py-2">
              Service Code
            </button>
          </div>
          {/* second section */}
          <div className="hidden md:block">
            <div className="flex flex-col gap-y-4">
              <p>Audio Description</p>
              <p>Investor Relations</p>
              <p>Legal Provisions</p>
            </div>
          </div>
          {/* third section */}
          <div className="hidden md:block">
            <div className="flex flex-col gap-y-4">
              <p>Help center</p>
              <p>Jobs</p>
              <p>Cookie Prefrences</p>
            </div>
          </div>
          <div className="hidden md:block">
            {/* fourth section */}
            <div className="flex flex-col gap-y-4">
              <p>Gift Cards</p>
              <p>Terms of Use</p>
              <p>Corporate Information</p>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <p className="text-[#808080]">
            © 2022 Khoirul Huda Movies, All Right Reserved
          </p>
        </div>
      </section>
    );
  };
  
  export default Footer;
  