// Code MovieReviews Here
// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews }) => {
return(
<div className="list">{reviews.map(review => {
    return (
        <div>
            <header>
        <a
          href={review.link.url}
        >
          {review.headline}
        </a>
        <br/>
        <span>Title: {review.display_title}</span>
        <br/>
        <span >Author: {review.byline}</span>
      </header>
      <p>Summary: {review.summary_short}</p>
        </div>
    )
})}</div>
)};

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
