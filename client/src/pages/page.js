import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
import PageHeader from './header';
import logo from './logo.png';
import './page.css';

class Page extends Component {

  componentDidMount() {
    console.log('Page is mounted', this.props);
  }

  state = { visible: true }

  // toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <Sidebar.Pushable as={Segment}>
        
        <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
          <Menu.Item name='home'>
            <Icon name='home' />
            Home
          </Menu.Item>
          <Menu.Item name='crm'>
            <Icon name='users' />
            CRM
          </Menu.Item>
          <Menu.Item name='csm'>
            <Icon name='sitemap' />
            CMS
          </Menu.Item>
          <Menu.Item name='camera'>
            <Icon name='cubes' />
            POM
          </Menu.Item>
          <Menu.Item name='camera'>
            <Icon name='bar graph' />
            Analytics
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic style={{marginRight:'150px'}}>
            <PageHeader/>
            {this.props.children}
          </Segment>
          <div class="logo"><img src={logo} alt="saat teknoloji logo"/></div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

export default Page;