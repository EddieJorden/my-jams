import React from 'react';
import TrackList from '../TrackList/TrackList.jsx';
import './SearchResults.css';

class SearchResults extends React.Component {
	render() {
		return (
			<div className="SearchResults">
				<h2>Results</h2>
				<TrackList
					onAdd={this.props.onAdd}
					tracks={this.props.searchResults}
					isRemoval={false}
				/>
			</div>
		);
	}
}

export default SearchResults;
