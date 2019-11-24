import React, { useCallback, useReducer } from 'react'

import Parameters from './components/Parameters'
import UserData from './components/UserData'
import CreditCard from './components/CreditCard'
import Confirmation from './components/Confirmation'

const initialState = {
  currentStep: 0,
  values: []
}

function reducer(state, action) {
  switch (action.type) {
    case 'next':
      if (state.currentStep === 3) return state
      return { ...state, currentStep: state.currentStep + 1 }
    case 'prev':
      if (state.currentStep === 0) return state
      return { ...state, currentStep: state.currentStep - 1 }
    case 'set_value':
      state.values[state.currentStep] = action.payload
      return state
    default:
      throw new Error()
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const goPrev = useCallback(() => {
    dispatch({ type: 'prev' })
  }, [dispatch])

  const handleSubmit = useCallback(
    (values, actions) => {
      dispatch({ type: 'set_value', payload: values })
      if (state.currentStep === 3) {
        console.log('Collected Data', state.values)
      } else {
        dispatch({ type: 'next' })
      }
    },
    [dispatch, state.currentStep, state.values]
  )

  return (
    <div className="container">
      <div className="card mx-auto my-3 card-subscription">
        <div className="card-header">Subscription order process</div>
        <div className="card-body">
          {state.currentStep === 0 && (
            <Parameters initialValues={state.values[0]} onSubmit={handleSubmit}>
              <button
                type="button"
                className="btn btn-outline-secondary px-5"
                onClick={goPrev}
              >
                Prev
              </button>
              <button
                type="submit"
                className="btn btn-outline-primary px-5 ml-3"
              >
                Next
              </button>
            </Parameters>
          )}

          {state.currentStep === 1 && (
            <UserData initialValues={state.values[1]} onSubmit={handleSubmit}>
              <button
                type="button"
                className="btn btn-outline-secondary px-5"
                onClick={goPrev}
              >
                Prev
              </button>
              <button
                type="submit"
                className="btn btn-outline-primary px-5 ml-3"
              >
                Next
              </button>
            </UserData>
          )}

          {state.currentStep === 2 && (
            <CreditCard initialValues={state.values[2]} onSubmit={handleSubmit}>
              <button
                type="button"
                className="btn btn-outline-secondary px-5"
                onClick={goPrev}
              >
                Prev
              </button>
              <button
                type="submit"
                className="btn btn-outline-primary px-5 ml-3"
              >
                Next
              </button>
            </CreditCard>
          )}

          {state.currentStep === 3 && (
            <Confirmation
              initialValues={state.values[3]}
              onSubmit={handleSubmit}
            >
              <button
                type="button"
                className="btn btn-outline-secondary px-5"
                onClick={goPrev}
              >
                Prev
              </button>
              <button
                type="submit"
                className="btn btn-outline-success px-5 ml-3"
              >
                Confirm
              </button>
            </Confirmation>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
