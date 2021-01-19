import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Components{
  constructor(){
    super()
    this.state={}
  }
  handleFetch() {
    fetch(URL)
      .then(res => res.json())
      .then(data => this.setStatae(data))
  }
  render(){
    return(null)
  }
}
export default LatestMovieReviewsContainer
