import React from 'react';


class SearchBar extends React.Component {

  state = {term:''};

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (

    <div  className="ui segment">
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div style={{display:'flex'}} className="field">
            <label>Image Search</label>
            <input
            className="formfields"
            type="text"
            placeholder="what would you like to search?"
            value={this.state.term}
            onChange={e=>this.setState({ term:e.target.value})}
            />
          <div style={{marginLeft:'5px'}} class="ui icon primary button">
            <i class="search icon"></i>
          </div>
        </div>
      </form>
    </div>
  );
  }
}


export default SearchBar;
