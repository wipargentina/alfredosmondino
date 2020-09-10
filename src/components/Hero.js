import React from "react";
import { Link as Scroll } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1>Remates de Hacienda</h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur, cupiditate.
            </h2>
            <Scroll
              to="sale"
              spy={true}
              smooth={true}
              offset={-98}
              duration={599}
              className="btn btn-lg px-5 btn-primary text-white"
            >
              PRÓXIMO REMATE
            </Scroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
