import React, { Component } from 'react';
import './index.css';

import { connect } from 'react-redux'

class Header extends Component {
  state = {users: ['abc']}

  // componentDidMount() {
  //   fetch('/users')
  //     .then(res => res.json())
  //     .then(users => this.setState({ users }));
  // }
  
  render() {
    return (
      <header>
        <h1>Welcome to ATLAST:CRM</h1>
      </header>
    );
  }
}

export default connect(state=>({}), {})(Header)
