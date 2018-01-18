import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
import PageHeader from './header';
import PageFooter from './footer';

class Page extends Component {

  componentDidMount() {
    console.log('Page is mounted', this.props);
  }

  state = { visible: true }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <Sidebar.Pushable as={Segment}>
        
        <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
          <Menu.Item name='home'>
            <Icon name='home' />
            Home
          </Menu.Item>
          <Menu.Item name='gamepad'>
            <Icon name='gamepad' />
            Games
          </Menu.Item>
          <Menu.Item name='camera'>
            <Icon name='camera' />
            Channels
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            <PageHeader/>
            <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
            {this.props.children}
            <PageFooter/>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

export default Page;