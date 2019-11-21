import React, { Component } from 'react';
import Reader from './Reader/Reader';
import publications from './publications.json';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Reader items={publications} />
      </>
    );
  }
}

export default App;
