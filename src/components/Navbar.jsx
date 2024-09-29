import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const CustomNavbar = () => {
  return (
    <nav className="navbar navbar-dark" aria-label="Dark offcanvas navbar">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarDark" aria-controls="offcanvasNavbarDark" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasNavbarDark" aria-labelledby="offcanvasNavbarDarkLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarDarkLabel">
              <img style={{ height: '25px', width: '30px', margin: '10px' }} src={logo} alt="Logo" />
              VisualSort
            </h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/insertion-sort">Insertion Sort</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/bubble-sort">Bubble Sort</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/quick-sort">Quick Sort</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/merge-sort">Merge Sort</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/selection-sort">Selection Sort</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
