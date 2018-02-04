import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Segment, Icon, Label, Menu, Table } from 'semantic-ui-react';
import Page from '../page';
import './index.css';
import { increment } from "../../reducers/counter";
import DummyUserSearch from "../../components/dummy/user-search";

class User extends Component {
  
  increment = () => {
    console.log('component increment triggered');
    // this.props.count <!--button onClick={this.increment}>+</button-->
    this.props.increment()
  }
  
  componentDidMount() {
    console.log('User page mounted', this.props);
  }
  
  render() {
    return (
      <Page>
        <h2>Customers</h2>
        <Segment padded>
          <DummyUserSearch/>
        </Segment>
        <Segment padded>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>E-mail</Table.HeaderCell>
                <Table.HeaderCell>City</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
  
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Gokhan Asar</Label>
                </Table.Cell>
                <Table.Cell>zgasar@gmail.com</Table.Cell>
                <Table.Cell>Istanbul</Table.Cell>
                <Table.Cell collapsing={true}>
                  <Button icon color="teal"><Icon name='list layout' /></Button>
                  <Button icon color="grey"><Icon name='edit' /></Button>
                  <Button icon color="red"><Icon name='delete'/></Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Kadir Dogan</Table.Cell>
                <Table.Cell>kadir.doggan@gmail.com</Table.Cell>
                <Table.Cell>London</Table.Cell>
                <Table.Cell collapsing={true}>
                  <Button icon color="teal"><Icon name='list layout' /></Button>
                  <Button icon color="grey"><Icon name='edit' /></Button>
                  <Button icon color="red"><Icon name='delete' /></Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Mustafa Yıldız</Table.Cell>
                <Table.Cell>mustafayildiz@gmail.com</Table.Cell>
                <Table.Cell>Istanbul</Table.Cell>
                <Table.Cell collapsing={true}>
                  <Button icon color="teal"><Icon name='list layout' /></Button>
                  <Button icon color="grey"><Icon name='edit' /></Button>
                  <Button icon color="red"><Icon name='delete' /></Button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
  
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='4'>
                  <Menu floated='right' pagination>
                    <Menu.Item as='a' icon>
                      <Icon name='left chevron' />
                    </Menu.Item>
                    <Menu.Item as='a'>1</Menu.Item>
                    <Menu.Item as='a'>2</Menu.Item>
                    <Menu.Item as='a'>3</Menu.Item>
                    <Menu.Item as='a'>4</Menu.Item>
                    <Menu.Item as='a' icon>
                      <Icon name='right chevron' />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
          <div style={{textAlign:'right'}}>
            <Button primary>
              <Icon name='add user' />
              Add New Customer
            </Button>
          </div>
        </Segment>
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