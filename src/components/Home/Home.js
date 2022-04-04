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
      <div className=" d-flex vh-100 flex-column-reverse flex-md-row  justify-content-between px-10 bg-color">
        <div className="d-flex flex-column align-items-center align-items-md-start p-4">
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
        <div className="img">
          <img
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
        <h5 className="review-title p-5 text-center">
          Total Customer Reviews: {reviews.length}
        </h5>
      </section>

      <section>
        <Row xs={1} md={3} className="g-4 mx-auto w-100">
          {reviews.slice(0, 3).map((review) => (
            <CartReviews key={review.id} review={review}></CartReviews>
          ))}
        </Row>
        <div className="text-center">
          <Link to="/reviews">
            <button className="btn-hover color-10 ">See all reviews</button>
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
