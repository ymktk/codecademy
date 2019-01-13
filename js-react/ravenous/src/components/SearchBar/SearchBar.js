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
    this.getSortByClass = this.getSortByClass.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
  }

  getSortByClass(sortByOptionValue) {
    if (this.state.sortBy === sortByOptionValue) {
      return 'active';
    } else {
      return '';
    }
  }

  handleSortByChange(sortByOptionValue) {
    this.setState(
      { sortBy : sortByOptionValue }
    );
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
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a href='*' >Let's Go</a>
        </div>
      </div>
    );

  }
}

export default SearchBar;