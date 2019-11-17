import React from 'react'

import Parameters from './components/Parameters'
import UserData from './components/UserData'
import CreditCard from './components/CreditCard'
import Confirmation from './components/Confirmation'

const App = () => {
  return (
    <div className="App container">
      <Parameters />
      <hr className="my-4" />
      <UserData />
      <hr className="my-4" />
      <CreditCard />
      <hr className="my-4" />
      <Confirmation />
      <hr className="my-4" />

      <button type="button" className="btn btn-outline-secondary">
        Prev
      </button>
      <button type="button" className="btn btn-outline-secondary">
        Next
      </button>
    </div>
  )
}

export default App
