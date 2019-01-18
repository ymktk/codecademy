import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy:'best_match'
    };

    this.handleTermChange     = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch         = this.handleSearch.bind(this);
  }

  getSortByClass(sortByOptionValue) {
    if (this.state.sortBy === sortByOptionValue) {
      return 'active';
    } 
    return '';
  }

  handleSortByChange(sortByOptionValue) {
    this.setState({ sortBy : sortByOptionValue });
  }

  handleTermChange(event) {
    this.setState({ term : event.target.value });
  }

  handleLocationChange(event) {
    this.setState({ location : event.target.value });
  }

  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOptionKey => {
      let sortByOptionValue = sortByOptions[sortByOptionKey];
      return (
        <li 
          className={this.getSortByClass(sortByOptionValue)} 
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
          key={sortByOptionValue}
          >
          {sortByOptionKey}
        </li>
      );
    })
  }

  render () {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input 
            placeholder="Search Businesses" 
            onChange={this.handleTermChange.bind(this)}
            />
          <input 
            onChange={this.handleLocationChange.bind(this)}
            placeholder="Where?" 
            />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch.bind(this)} href="*" >Let's Go</a>
        </div>
      </div>
    );

  }
}

export default SearchBar;