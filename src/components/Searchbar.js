import React, { Component } from "react";
import { queryString } from "query-string";

class SearchBar extends Component {
  state = {
    // searchText: this.props.querySearch.name || "",
    searchText: this.props.querySearch || "",
    error: true,
    touch: false
  };

  handleChange = e => {
    this.setState({
      // [e.target.name]: e.target.value,
      [e.target]: e.target.value,
      error: e.target.value.length <= 5
    });
  };

  handleBlur = e => {
    this.setState({ touch: true });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSearch(this.state.searchText);
  };

  componentDidMount() {
    const { searchText } = this.state;
    if (searchText) {
      this.props.onSearch(searchText);
    }
  }

  render() {
    return (
      <div className=" row mb-4 SearchBar">
        <div className="col-12">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group d-flex flex-row flex-nowrap">
              <input
                type="text"
                className="form-control w-75 mt-2"
                name="searchText"
                autoComplete="off"
                value={this.state.searchText}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              <button
                type="submit"
                className="btn rojosearch w-25"
                disabled={this.state.error}
              >
                <i class="fas fa-search"></i>
              </button>

              {this.state.touch && this.state.error && (
                <div>Prueba otra vez</div>
              )}
            </div>
            <div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
