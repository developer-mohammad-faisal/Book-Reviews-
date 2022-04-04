import React, { Fragment } from "react";
import { Row } from "react-bootstrap";
import CartReviews from "../CartReviews/CartReviews";
import useReviewCustomHook from '../hooks/ReviewCustomHook'
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReview] = useReviewCustomHook();
  return (
    <Fragment>
      <h1 className="review-title p-5 text-center">Customer Review</h1>
      {
          <Row xs={1} md={3} className="g-4 mx-auto w-100">
          {reviews.map((review) => (
            <CartReviews key={review.id} review={review}></CartReviews>
          ))}
        </Row>
      }
    </Fragment>
  );
};

export default Reviews;
