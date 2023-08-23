/* eslint-disable array-callback-return */
import NavbarHeader from "./NavbarHeader";
import SearchField from "./SearchField";
import ProfilImage from "./../../assets/profile/kemal.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  const [profileDropDown, setProfileDropdown] = useState(false);
  const profile = localStorage.getItem("profile");
  const setDropDown = () => {
    setProfileDropdown((prev) => !prev);
  };

  const listData = [
    {
      name : 'Home',
      link : 'home'
    },
    {
      name : 'Series',
      link : 'series'
    },
    {
      name : 'New and Popular',
      link : 'popular'
    },
    {
      name : 'MyList',
      link : 'list'
    },
  ];
    return (
        <div className="relative inline-flex w-full justify-between md:justify-around md:gap-x-24 items-center">
          {/* header */}
          <NavbarHeader />
          <div className="hidden md:block w-full">
            <div className="inline-flex w-full justify-between items-center">
              {/* nav menus */}
              <div className="inline-flex gap-x-8">
              {listData.map(item => {
                return(
                  <Link to={`/project-movies/${item.link}`}>
                  <div
                      className="text-base font-semibold text-black md:text-white">
                      {item.name}
                  </div>
                </Link>
                );
              })}
              </div>
              {/* auth nav and search field */}
              <div className="inline-flex gap-x-8 items-center">
                <p>hudak006@gmail.com</p>
                <SearchField color="white" />
                <div className="relative inline-flex items-center gap-x-4">
                {/* present icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.9385 10.0388C17.9385 10.1247 17.8661 10.1971 17.7801 10.1971H17.5937H16.2366H3.05903H1.70192H1.51554C1.42959 10.1971 1.35721 10.1247 1.35721 10.0388V7.52901C1.35721 7.44215 1.42959 7.36977 1.51554 7.36977H8.96882H14.5312H17.7801C17.8661 7.36977 17.9385 7.44215 17.9385 7.52901V10.0388ZM16.2366 18.5732C16.2366 18.6094 16.2032 18.6429 16.167 18.6429H10.3259V11.5542H16.2366V18.5732ZM8.96882 18.6429H3.1287C3.0916 18.6429 3.05903 18.6094 3.05903 18.5732V11.5542H8.96882V18.6429ZM6.67891 1.35684C7.91117 1.35684 8.91273 2.3593 8.91273 3.59065V5.82447H6.67891C5.44756 5.82447 4.4451 4.82201 4.4451 3.59065C4.4451 2.3593 5.44756 1.35684 6.67891 1.35684ZM10.3259 4.9342C10.3259 3.85122 11.2072 2.9709 12.2901 2.9709C13.374 2.9709 14.2543 3.85122 14.2543 4.9342C14.2543 5.335 14.1295 5.70323 13.9214 6.01265H10.3259V4.9342ZM17.7801 6.01265H15.4187C15.5382 5.67428 15.6115 5.31419 15.6115 4.9342C15.6115 3.103 14.1213 1.61288 12.2901 1.61288C11.4361 1.61288 10.6643 1.94673 10.0753 2.47872C9.60395 1.0447 8.26855 -0.000274658 6.67891 -0.000274658C4.69933 -0.000274658 3.08798 1.61107 3.08798 3.59065C3.08798 4.53068 3.46074 5.37662 4.05606 6.01265H1.51554C0.679554 6.01265 9.15527e-05 6.69302 9.15527e-05 7.52901V10.0388C9.15527e-05 10.8747 0.679554 11.5542 1.51554 11.5542H1.70192V18.5732C1.70192 19.3603 2.34157 20 3.1287 20H16.167C16.9541 20 17.5937 19.3603 17.5937 18.5732V11.5542H17.7801C18.6161 11.5542 19.2956 10.8747 19.2956 10.0388V7.52901C19.2956 6.69302 18.6161 6.01265 17.7801 6.01265Z"
                    fill="white"
                  />
                </svg>
                {/* bell icon */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99999 20C11.1416 20 12.08 19.1301 12.1887 18.017H7.81128C7.92003 19.1301 8.85835 20 9.99999 20Z"
                    fill="white"
                  />
                  <path
                    d="M17.6529 13.5882C16.982 13.5882 16.4382 13.0444 16.4382 12.3735V8.35574C16.4382 5.50652 14.5872 3.08996 12.0222 2.24203C12.0293 2.17324 12.0329 2.10352 12.0329 2.03289C12.0329 0.911953 11.121 0 10 0C8.87907 0 7.96712 0.911953 7.96712 2.03289C7.96712 2.10352 7.97079 2.17324 7.97782 2.24203C5.41286 3.08996 3.56188 5.50652 3.56188 8.35574V12.3735C3.56188 13.0444 3.01802 13.5882 2.34716 13.5882C1.44778 13.5882 0.718719 14.3173 0.718719 15.2167C0.718719 16.1161 1.44782 16.8452 2.34716 16.8452H17.6529C18.5523 16.8452 19.2813 16.1161 19.2813 15.2167C19.2813 14.3173 18.5522 13.5882 17.6529 13.5882ZM10 1.17188C10.4552 1.17188 10.8288 1.52703 10.8588 1.97477C10.5779 1.9373 10.2913 1.91762 10 1.91762C9.70876 1.91762 9.42216 1.9373 9.14118 1.97477C9.17118 1.52703 9.54478 1.17188 10 1.17188V1.17188Z"
                    fill="white"
                  />
                </svg>
                {/* profile pict */}
                <img
                  src={profile === undefined ? ProfilImage : profile}
                  alt=""
                  className="flex w-11 h-11 object-cover bg-slate-400"
                />
                {/* dropdown menu */}
                <button onClick={setDropDown}>
                  <svg
                    className={
                      profileDropDown
                        ? "rotate-180 transition-all duration-100 cursor-pointer"
                        : "transition-all duration-100 cursor-pointer"
                    }
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.92907 7.07973L13.968 0.645906C13.9838 0.633879 13.9946 0.616512 13.9985 0.59707C14.0023 0.577628 13.9989 0.557451 13.9889 0.540332C13.9789 0.523213 13.963 0.510332 13.9442 0.50411C13.9254 0.497888 13.905 0.498754 13.8867 0.506546H0.113253C0.0950305 0.498754 0.0745892 0.497888 0.0557726 0.50411C0.0369559 0.510332 0.0210601 0.523213 0.011074 0.540332C0.001088 0.557451 -0.0023004 0.577628 0.00154573 0.59707C0.00539187 0.616512 0.0162077 0.633879 0.0319596 0.645906L6.07093 7.07973C6.19034 7.20627 6.33434 7.30707 6.4941 7.37597C6.65386 7.44487 6.82602 7.48041 7 7.48041C7.17398 7.48041 7.34614 7.44487 7.5059 7.37597C7.66566 7.30707 7.80966 7.20627 7.92907 7.07973Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <section className="absolute mt-52 right-0 text-black">
                  {profileDropDown && (
                    <div className="flex flex-col gap-y-2 w-[130px] h-auto bg-white rounded-sm p-4">
                      <Link to={"/mini-project-movie/profile"}>
                        <button className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <p className="ml-3">Profile</p>
                        </button>
                      </Link>
                      <button className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="ml-3">Setting</p>
                      </button>
                      <button onClick={null} className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 mr-1 md:mr-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                        <p className="text-black">Logout</p>
                      </button>
                    </div>
                  )}
                </section>
              </div>
               </div>
            </div>
          </div>
        </div>
      );
};
    export default MainNavbar;
    