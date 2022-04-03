import React, { Fragment } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartReviews from "../CartReviews/CartReviews";
import useReviewCustomHook from "../hooks/ReviewCustomHook";
import "./Home.css";

const Home = () => {
  const [reviews, setReview] = useReviewCustomHook();
  return (
    <Fragment>
      <div className="row w-100 bg-color p-3">
        <div className=" col-md-6">
          <h1 className="heading">
            Welcome to The <span className="book">Book Bazaar</span>
          </h1>
          <p>
            Hi there! I’m Aly and I run The Book Bazaar. I’m a nonbinary, pagan,
            cosplayer, artist, writer, and more! Feel free to check out my
            favorite books. Purchasing from The Book Bazaar supports both local
            bookstores and me. Help support local indie businesses and get
            yourself a new world to explore! Thank you!
          </p>
          <button className="btn-hover color-7">Order Now</button>
        </div>
        <div className="col-md-6">
          <img
            width={"600px"}
            src="https://cdn.dribbble.com/users/92954/screenshots/3195181/books.gif"
            alt=""
          />
        </div>
      </div>

      <section className="container mt-5">
        <h1 className="customer-review">Customer Review</h1>
        <hr />
        <p>
          A customer review is a review of a product or service made by a
          customer who has purchased and used, <br /> or had experience with,
          the product or service. Customer reviews are a form of <br /> customer
          feedback on electronic commerce and online shopping sites.
        </p>
        <Link to="/reviews">
          <button className="btn-hover color-10">More Review</button>
        </Link>
      </section>

      <section>
        <Row xs={1} md={3} className="g-4 w-100">
          {reviews.map((review) => (
            <CartReviews key={review.id} review={review}></CartReviews>
          ))}
        </Row>
      </section>
    </Fragment>
  );
};

export default Home;
