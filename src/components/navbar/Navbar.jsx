import React, { useState } from 'react';
import './Navbar.css'; 

function Navbar() {


 
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };



 
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        
      
        <h1>around </h1>
       <p style={{fontWeight:'bold', fontSize:'large'}} >  miro| LABS</p>
      </div>

     
      <div className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleNavbar}>
      {isOpen ? (
          <div className="close-icon" onClick={toggleNavbar}>
            X 
          </div>
        ) : (
          <div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        )}
      </div>


     
      <div className={`mobile-links ${isOpen ? 'active' : ''}`}>
        <ul>
          <li>INTRO</li>
          <li>DEMO VIDEO</li>
          <li>FEEDBACK</li>
          <li>TEAMWORK</li>
          <li>TESTIMONIAL</li>
          <li>DOWNLOAD</li>
          <li>ABOUT US</li>
          <li>BLOG</li>
          <li>FAQ</li>
          <li>PRICING</li>
        </ul>
      </div>

      
      <div className="desktop-links">
        <ul>
         
          
          <li >DOWNLOAD</li>
          <li>LOGIN</li>
          <li className='signin'>SIGN IN</li>
         
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
