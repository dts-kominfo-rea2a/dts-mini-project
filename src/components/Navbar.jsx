import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, NavLink } from "react-router-dom";
import { auth, db, logout } from "../data/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    const fetchUserName = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    };
    fetchUserName();
  }, [user, loading, navigate]);

  return (
    <div>
      <nav className="bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <NavLink to="/">
                  <img className="h-8 w-8" src={Logo} alt="Workflow" />
                </NavLink>
              </div>
              <div className="md:block ">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink
                    to="/"
                    className="text-gray-300 hover:bg-neutral-800 hover:text-white px-4 py-5 rounded-md text-sm font-medium"
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/popular"
                    className="text-gray-300 hover:bg-neutral-800 hover:text-white px-4 py-5 rounded-md text-sm font-medium"
                  >
                    New And Popular
                  </NavLink>

                  <NavLink
                    to="/series"
                    className="text-gray-300 hover:bg-neutral-800 hover:text-white px-4 py-5 rounded-md text-sm font-medium"
                  >
                    Series
                  </NavLink>

                  {/* <NavLink
                    to="/genres"
                    className="text-gray-300 hover:bg-neutral-800 hover:text-white px-4 py-5 rounded-md text-sm font-medium"
                  >
                    Genres
                  </NavLink> */}
                  {user ? (
                    <NavLink
                      to="/mylist"
                      className="text-gray-300 hover:bg-neutral-800 hover:text-white px-4 py-5 rounded-md text-sm font-medium"
                    >
                      My List
                    </NavLink>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <div className="mr-2 flex">
              {!user ? (
                <>
                  <NavLink
                    to="/login"
                    className="text-gray-300 hover:bg-neutral-800 hover:text-white px-4 py-5 rounded-md text-sm font-medium"
                  >
                    Login
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to="/"
                    className="text-gray-300 hover:bg-neutral-800 hover:text-white px-4 py-5 rounded-md text-sm font-medium"
                  >
                    {name}
                  </NavLink>
                  <button
                    className="text-gray-300 hover:bg-neutral-800 hover:text-white px-4 py-5 rounded-md text-sm font-medium"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
