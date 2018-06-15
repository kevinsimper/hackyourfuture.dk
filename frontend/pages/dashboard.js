import React from 'react'
import Layout from '../components/Layout'
import Content from '../components/Content'
import { getApi } from '../services/api'

export default class Dashboard extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {},
      loading: true
    }
  }
  componentDidMount() {
    console.log(getApi())
    fetch(`${getApi()}/graphql`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + window.localStorage.ACCESS_TOKEN
      },
      method: 'POST'
    })
      .then(res => res.json())
      .then(body => {
        this.setState({
          user: body,
          loading: false
        })
      })
  }
  render() {
    return (
      <Layout>
        <Content>
          <h1>Dashboard</h1>
          {this.state.loading ? 'Loading' : 'Hi ' + this.state.user.email}
        </Content>
      </Layout>
    )
  }
}
