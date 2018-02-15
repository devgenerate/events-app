// react stuff
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
// redux stuff
import { connect } from 'react-redux'
import dashboardActions from 'reduxConfig/actions/dashboard'
import loginActions from 'reduxConfig/actions/login'
// material ui stuff
import Grid from 'material-ui/Grid'
import CloseIcon from 'material-ui-icons/close'
// components
import DashboardEventNewForm from 'components/Dashboard/DashboardEventNew/DashboardEventNewForm/dashboard.event.new.form'

class DashboardEventNew extends Component {
  constructor (props) {
    super(props)
    this.redirectToDashboardPage = this.redirectToDashboardPage.bind(this)
  }

  redirectToDashboardPage () {
    const { history } = this.props
    history.push(`/dashboard`)
  }

  buildContent () {
    const { events: { tokenExpired }, loginFailure, history } = this.props
    // redirect to login page if the token has expired
    if (tokenExpired) {
      // dispatch this to show up the error in login page
      loginFailure('The session has expired, please login')
      history.push(`/dashboard`)
    }

    return (
      <Grid container className='dasboard-event-new' spacing={24}>
        <Grid item md={12} sm={12} xs={12}>
          <div className='dasboard-event-new__top-bar'>
            <span className='dasboard-event-new__top-bar-icon'><CloseIcon onClick={this.redirectToDashboardPage} /></span>
            <span className='dasboard-event-new__top-bar-text'>Close</span>
          </div>
          <div className='dasboard-event-new__container'>
            <DashboardEventNewForm {...this.props} />
          </div>
        </Grid>
      </Grid>
    )
  }

  render () {
    return this.buildContent()
  }
}
// bind component to the store
export default connect(
  // map props
  state => ({
    events: state.events
  }),
  // map actions
  {
    createEvent: dashboardActions.createEvent,
    eventFailure: dashboardActions.eventFailure,
    loginFailure: loginActions.loginFailure
  }
)(DashboardEventNew)
