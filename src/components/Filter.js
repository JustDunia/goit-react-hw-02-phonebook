import { nanoid } from 'nanoid';
import { Component } from 'react';
import { PropTypes } from 'prop-types';

export class Filter extends Component {
  filterInputId = nanoid();

  handleChange = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    const { filterValue } = this.props;
    return (
      <div>
        <label htmlFor={this.filterInputId}>Find contacts by name</label>
        <input
          type="text"
          id={this.filterInputId}
          value={filterValue}
          onChange={this.handleChange}
          name="filter"
        />
      </div>
    );
  }
}

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
