import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import React, { Fragment } from 'react';
import { Card, Col } from 'react-bootstrap';
import './CartReviews.css'

const CartReviews = (props) => {
  const {name, img, review} = props.review
  return (

    <Fragment>

  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card className='shadow'>
       <div className='cart-style'>
       <img src={img} alt="" />
          <div className='center-style'>
          <h6>{name}</h6>
          <p className='icon'><FontAwesomeIcon icon={faStar} ></FontAwesomeIcon>
       <FontAwesomeIcon icon={faStar} ></FontAwesomeIcon>
       <FontAwesomeIcon icon={faStar} ></FontAwesomeIcon>
       <FontAwesomeIcon icon={faStar} ></FontAwesomeIcon>
       <FontAwesomeIcon icon={faStarHalfStroke} ></FontAwesomeIcon></p>
          </div>
       </div>
                          
        <Card.Body>
          <Card.Text>{review}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}

    </Fragment>

  );
};

export default CartReviews;