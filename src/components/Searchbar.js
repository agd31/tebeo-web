import React, { Component } from "react";
import { queryString } from "query-string";

class SearchBar extends Component {
  state = {
    searchText: this.props.querySearch.name || "",
    error: true,
    touch: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
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
      <div className="SearchBar row mb-4">
        <div className="col-8">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={this.state.searchText}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />

              {this.state.touch && this.state.error && (
                <div>Prueba otra vez</div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={this.state.error}
            >
              Buscar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
