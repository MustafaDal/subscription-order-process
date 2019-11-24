import React from 'react'

import Parameters from './Parameters'
import UserData from './UserData'
import CreditCard from './CreditCard'
import Confirmation from './Confirmation'

const ComponentByStep = ({ step = 0, ...props }) => {
  const Component = [Parameters, UserData, CreditCard, Confirmation][step]
  return <Component {...props} />
}

export default ComponentByStep
