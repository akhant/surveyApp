import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import * as actions from '../actions'
import { connect } from 'react-redux'

 class Payments extends Component {
  render() {
    return (
      <StripeCheckout
      name="Survey"
      descriprion="5$ for buityfull eyes"
      amount={500}
      token={token => this.props.handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
      <button className="btn" >Add credits</button> 
      </StripeCheckout>
    )
  }
}


export default connect(null, actions)(Payments)