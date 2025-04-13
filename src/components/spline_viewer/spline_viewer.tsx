//@ts-nocheck
import React, { useEffect } from "react";
import "./spline_viewer.css";
import "../../App.css";
const SplineViewer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <spline-viewer
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
      data-aos-duration="3000"
      className="robot-3d"
      url="https://prod.spline.design/5zXRkTnUIgySzrmo/scene.splinecode"
      style={{ height: "100vh", width: "100%" }}
    ></spline-viewer>
  );
};

export default SplineViewer;
