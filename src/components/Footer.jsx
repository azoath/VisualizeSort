import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../App.css'; // Import the CSS file

const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
            <Link to="/" className="nav-link px-2">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/insertion-sort" className="nav-link px-2">Insertion Sort</Link>
          </li>
          <li className="nav-item">
            <Link to="/bubble-sort" className="nav-link px-2">Bubble Sort</Link>
          </li>
          <li className="nav-item">
            <Link to="/quick-sort" className="nav-link px-2">Quick Sort</Link>
          </li>
          <li className="nav-item">
            <Link to="/merge-sort" className="nav-link px-2">Merge Sort</Link>
          </li>
          <li className="nav-item">
            <Link to="/selection-sort" className="nav-link px-2">Selection Sort</Link>
          </li>
        </ul>
        <p className="text-center">© Sorting Visualizer, Created by Vaishnavi</p>
      </footer>
    </div>
  );
};

export default Footer;