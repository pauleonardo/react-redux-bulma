import React, { Component, PropTypes } from 'react';

import Header from './common/header';
import Foo from './common/footer'

class App extends Component {
  render () {
    return (
      <div >
        <Header />
        {this.props.children}
        <Foo />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
