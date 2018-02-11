import React, { Component } from 'react'
// redux stuff
import { connect } from 'react-redux'
import loginActions from 'reduxConfig/actions/login'
import LoginForm from './LoginForm/LoginForm'

class Login extends Component {
  render () {
    return (
      <div className='container'>
        <LoginForm props={this.props} />
      </div>
    )
  }
}
// bind component to the store
export default connect(
  // map props
  state => ({
    users: state.users
  }),
  // map actions
  {
    login: loginActions.login
  }
)(Login)
