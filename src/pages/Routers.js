import { Routes, Route } from "react-router-dom";
import React from "react";
const MainNavigation = React.lazy(() => import("../components/Navbar/Navbar"));
const MoviesSelected = React.lazy(() => import("./DetailPage"));
const Home = React.lazy(() => import("./HomePage"));
const Footer = React.lazy(() => import("../components/Footer/Footer"));

const Routers = () => {
    return (
    <section className="flex flex-col w-full font-inter justify-between min-h-screen text-white bg-[#141414]">
      {/* main navigation */}
      <div className="fixed z-[202] w-full h-24 pt-6 px-8 shadow-md top-0 bg-[#141414]">
        <div className="flex w-full max-w-7xl mx-auto px-4">
          <React.Suspense fallback={<p>Loading...</p>}>
            <MainNavigation />
          </React.Suspense>
        </div>
      </div>
      {/* router view */}
      <div className="flex w-full max-w-7xl mx-auto mt-24 px-4">
        <Routes>
          {/* home */}
          <Route
            path="/home"
            element={
              <React.Suspense fallback={<p>Loading ...</p>}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="/home/detail/:id"
            element={
              <React.Suspense fallback={<p>Loading ...</p>}>
                <MoviesSelected />
              </React.Suspense>
            }
          />
        </Routes>
      </div>
      {/* footer */}
      <div className="flex w-full max-w-7xl mx-auto mt-16 px-4">
        <Footer />
      </div>
    </section>
    );
}
export default Routers;