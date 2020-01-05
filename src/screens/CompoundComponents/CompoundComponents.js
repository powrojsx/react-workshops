import React from 'react';
import css from './CompoundComponents.module.scss';

export class CompoundComponents extends React.Component {
  state = {
    value: this.props.defaultValue,
  };

  setValue = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <select
        onChange={this.setValue}
        value={this.state.value}
        className={css.Select}
      >
        {this.props.options.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    );
  }
}
