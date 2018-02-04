import React, { Component } from 'react'
import { Button, Form, Input, Radio, Select } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

const customer_type_options = [
  {key:'n', text: 'Standard', value: 'Standard'},
  {key:'t', text: 'Test', value: 'Test'},
  {key:'v', text: 'Vip', value: 'Vip'},
  {key:'s', text: 'Super', value: 'Super'}
]

class DummyUserSearch extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field control={Input} label='First name' placeholder='First name' />
          <Form.Field control={Input} label='Last name' placeholder='Last name' />
          <Form.Field control={Input} label='E-mail' placeholder='E-mail' />
          <Form.Field control={Select} label='Gender' options={options} placeholder='Gender' />
        </Form.Group>
        <Form.Group inline>
          <label>Customer Status</label>
          <Form.Field control={Radio} label='Active' value='1' checked={value === '1'} onChange={this.handleChange} />
          <Form.Field control={Radio} label='Inactive' value='2' checked={value === '2'} onChange={this.handleChange} />
          <Form.Field control={Radio} label='Suspend' value='3' checked={value === '3'} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group inline>
          <Form.Field control={Select} label='Customer Type' options={customer_type_options} placeholder='Choose Customer Type' />
        </Form.Group>
        <div style={{textAlign:'right'}}>
          <Form.Field control={Button}>Search</Form.Field>
        </div>
      </Form>
    )
  }
}

export default DummyUserSearch;