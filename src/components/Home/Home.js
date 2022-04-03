import React, { Fragment } from "react";
import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <div className="row w-100 bg-color p-3">
        <div className=" col-md-6">
          <h1 className="heading" >Welcome to The <span className="book" >Book Bazaar</span></h1>
          <p>
            Hi there! I’m Aly and I run The Book Bazaar. I’m a nonbinary, pagan,
            cosplayer, artist, writer, and more! Feel free to check out my
            favorite books. Purchasing from The Book Bazaar supports both local
            bookstores and me. Help support local indie businesses and get
            yourself a new world to explore! Thank you!
          </p>
          <button class="btn-hover color-7">Order Now</button>
        </div>
        <div className="col-md-6">
          <img width={'600px'} src="https://cdn.dribbble.com/users/92954/screenshots/3195181/books.gif" alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
