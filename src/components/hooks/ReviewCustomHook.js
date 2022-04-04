import { useEffect, useState } from "react";

const ReviewCustomHook = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("bookData.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return [reviews, setReview];
};

export default ReviewCustomHook;
