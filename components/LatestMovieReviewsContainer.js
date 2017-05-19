import React from 'react'
import MovieReviews from './MovieReviews'
// import {fetch} from 'whatwg-fetch'

class LatestMovieReviewsContainer extends React.Component {
	constructor() {
		super()

		this.state = {
			reviews: []
		}
	}

	componentWillMount(){
		const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=313f3dae8745471a8c9e6c497230bde6'
		fetch(URL)
		.then(res => res.json())
		.then(response => this.setState({reviews: response.results}))
	}
	

	render() {

		return(
			<div className="latest-movie-reviews">
				<h2>Reviews:</h2>
				<MovieReviews reviews={ this.state.reviews } />
			</div>
		)
	}
}

export default LatestMovieReviewsContainer