import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../page';
import { Statistic, Segment, Card, Divider } from 'semantic-ui-react'
import './index.css';

class Dashboard extends Component {
  
  componentDidMount() {
    console.log('Dashboard page mounted', this.props);
  }
  
  render() {
    return (
      <Page>
        <h2>Platform Statistics</h2>
        <Segment basic>
          <Card.Group>
            <Card color='green'>
              <Statistic color="green">
                <Statistic.Value>13,488</Statistic.Value>
                <Statistic.Label>Total Customers</Statistic.Label>
              </Statistic>    
            </Card>
            <Card color='blue'>
              <Statistic color="blue">
                <Statistic.Value>12,781</Statistic.Value>
                <Statistic.Label>Active Customers</Statistic.Label>
              </Statistic>
            </Card>
            <Card color='red'>
              <Statistic color="red">
                <Statistic.Value>707</Statistic.Value>
                <Statistic.Label>Suspended Customers</Statistic.Label>
              </Statistic>
            </Card>
          </Card.Group>
        </Segment>
        <Divider />
        <Segment basic>
          <Card.Group>
            <Card color='teal'>
              <Statistic color="teal">
                <Statistic.Value>34</Statistic.Value>
                <Statistic.Label>Total Package</Statistic.Label>
              </Statistic>
            </Card>
            <Card color='orange'>
              <Statistic color="orange">
                <Statistic.Value>320</Statistic.Value>
                <Statistic.Label>Total Live Channel</Statistic.Label>
              </Statistic>
            </Card>
            <Card color='purple'>
              <Statistic color="purple">
                <Statistic.Value>1294</Statistic.Value>
                <Statistic.Label>Total VOD</Statistic.Label>
              </Statistic>
            </Card>
          </Card.Group>
        </Segment>
      </Page>
    )
  }
}

export default connect()(Dashboard);