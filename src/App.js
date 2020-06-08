import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  state = { counter: 0 };
  render() {
    return <p>counter: {this.state.counter}</p>;
  }
}

export default hot(module)(App);
