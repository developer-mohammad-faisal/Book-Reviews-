import React, { Fragment } from 'react';
import CustomLink from './CustomLink/CustomLink';
import './Navbar.css'

const Navbar = () => {
  return (
   <Fragment>

<nav sticky="top" className="navbar navbar-expand-lg shadow-sm p-4 navbar-bg-color">
  <div className="container-fluid">
    <img width={'140px'} src="https://booksbazar.net/wp-content/uploads/2021/06/Logo-Main-004-1.png" alt="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <div className="nav-item d-flex fw-bold">
          <CustomLink to='./' >Home</CustomLink>
          <CustomLink to='./home' >Reviews</CustomLink>
          <CustomLink to='./dashboard' >Dashboard</CustomLink>
          <CustomLink to='./blogs' >Blogs</CustomLink>
          <CustomLink to='./about' >About</CustomLink>
        </div>
      </ul>
    </div>
  </div>
</nav>

   </Fragment>
  );
};

export default Navbar;