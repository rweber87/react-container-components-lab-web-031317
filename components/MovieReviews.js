import React from 'react'

const MovieReviews = (props) => {
	const reviews = props.reviews.map((f,i) => <Review review={f} /> )
	return(
		<div className="review-list">
			{reviews}
		</div>
	)
}

const Review = (props) => {
	
	return(
		<div className="review">
			{props.review.summary_short}
		</div>
	)
	return review
}

MovieReviews.defaultProps = {
  reviews: [{summary_short: ""}]
};

export default MovieReviews