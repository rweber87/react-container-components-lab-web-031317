import React from 'react'
// import {fetch} from 'whatwg-fetch'
import MovieReviews from './MovieReviews';

class SearchableMovieReviewsContainer extends React.Component {
	constructor() {
		super()

		this.state = {
			reviews: [],
			searchTerm: ''
		}
	}
	
	handleInputChange(event) {
		this.setState({
			searchTerm: event.target.value
		})
	}

	handleSubmit(ev){
		ev.preventDefault()
		
		const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=313f3dae8745471a8c9e6c497230bde6&query=${this.state.searchTerm}`
		fetch(URL)
		.then(res => res.json())
		.then(response => this.setState({reviews: response.results}))
	}

	render() {
		return(
			<div className='searchable-movie-reviews'>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<label>Enter a Term</label>
					<input type="text" value={this.state.searchTerm} onChange={this.handleInputChange.bind(this)} />
					<input type="submit" value="Search" />
				</form>
				<MovieReviews reviews={this.state.reviews}/>
			</div>
		)
	}
}

export default SearchableMovieReviewsContainer