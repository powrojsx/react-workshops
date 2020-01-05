import React, { createContext } from 'react';
import css from './CompoundComponents.module.scss';

const context = createContext({
  value: '',
  changeValue: () => {},
  reset: () => {},
});
const { Provider, Consumer } = context;

export class CompoundComponents extends React.Component {
  state = {
    value: this.props.defaultValue,
  };

  setValue = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  resetValue = () => {
    this.setState({
      value: this.props.defaultValue,
    });
  };

  static SelectedValue = () => {
    return (
      <Consumer>
        {({ value }) => {
          return <p className={css.Value}>{value}</p>;
        }}
      </Consumer>
    );
  };

  static ResetButton = () => {
    return (
      <Consumer>
        {({ reset }) => {
          return (
            <button className={css.Reset} onClick={reset}>
              Reset value
            </button>
          );
        }}
      </Consumer>
    );
  };

  render() {
    return (
      <Provider
        value={{
          value: this.state.value,
          changeValue: this.setValue,
          reset: this.resetValue,
        }}
      >
        <select
          onChange={this.setValue}
          value={this.state.value}
          className={css.Select}
        >
          {this.props.options.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
        {this.props.children}
      </Provider>
    );
  }
}
