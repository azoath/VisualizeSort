import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  return (
    <div id='hero'>
      <div className="text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">
            Sorting <span className="animated-text">Visualizer</span>
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">Explore the fascinating world of sorting algorithms through interactive visualizations. Our website brings data sorting to life with dynamic animations that make complex algorithms easy to understand. Watch as arrays transform from chaos to order, and gain insights into the mechanics of each sorting technique.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
