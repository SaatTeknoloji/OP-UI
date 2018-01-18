import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../page';
import './index.css';
import { increment } from "../../reducers/counter";

class User extends Component {
  
  increment = () => {
    console.log('component increment triggered');
    this.props.increment()
  }
  
  componentDidMount() {
    console.log('User page mounted', this.props);
  }
  
  render() {
    return (
      <Page>
        <h1>hello user page {this.props.count}</h1>
        <button onClick={this.increment}>+</button>
      </Page>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: function () {
      dispatch(increment())
    }
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter.count
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);