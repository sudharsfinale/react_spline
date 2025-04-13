import { useEffect } from "react";
import "./App.css";
import SplineViewer from "./components/spline_viewer/spline_viewer";
import AOS from "aos";
import "aos/dist/aos.css";
import NavLink from "./components/nav_link/nav_link";
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <div>
      <img className="image-gradient" src="/gradient.png" alt="" />
      <div className="layer-blur "></div>
      <div className="container">
        <header>
          <h1 data-aos="fade-down" data-aos-duration="500" className="logo">
            REACT
          </h1>
          <nav>
            <NavLink labelName="COMPANY" />
            <NavLink labelName="RESOURCES" renderDuration="1000" />
            <NavLink labelName="FEATURES" renderDuration="1500" />
            <NavLink labelName="DOCS" renderDuration="2000" />
          </nav>
          <button>Sign In</button>
        </header>
        <main>
          <div className="content">
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              className="tag-box"
              data-aos-duration="1000"
            >
              <div className="tag">INTRODUCING &wedbar;</div>
            </div>
            <h1
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              data-aos-duration="1500"
            >
              EMAIL FOR <br />
              DEVELOPERS
            </h1>
            <p
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              data-aos-duration="2000"
              className="description"
            >
              the best way to reach uumans insted of spam folders, dlever
              transactional and marketing emails at scale.
            </p>
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              data-aos-duration="3000"
              className="buttons"
            >
              <a href="" className="btn-get-started">
                Documentation &gt;
              </a>
              <a href="" className="btn-sign-up">
                Get started &gt;
              </a>
            </div>
          </div>
        </main>
        <SplineViewer />
      </div>
    </div>
  );
};

export default App;
