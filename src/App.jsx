import React, { useCallback } from 'react'

import ComponentByStep from './components/ComponentByStep'
import useStepper from './hooks/Stepper'

const App = () => {
  const { state, prev: goPrev, next: goNext, setValue } = useStepper()

  const handleSubmit = useCallback(
    (values, actions) => {
      setValue(values)
      if (state.currentStep === 3) {
        console.log('Collected Data', state.values)
      } else {
        goNext()
      }
    },
    [state.values, state.currentStep, setValue, goNext]
  )

  return (
    <div className="container">
      <div className="card mx-auto my-3 card-subscription">
        <div className="card-header">Subscription order process</div>
        <div className="card-body">
          <ComponentByStep
            step={state.currentStep}
            initialValues={state.values[state.currentStep]}
            onSubmit={handleSubmit}
          >
            <button
              type="button"
              className="btn btn-outline-secondary px-5"
              onClick={goPrev}
            >
              Prev
            </button>
            <button type="submit" className="btn btn-outline-primary px-5 ml-3">
              {state.currentStep === 3 ? 'Confirm' : 'Next'}
            </button>
          </ComponentByStep>
        </div>
      </div>
    </div>
  )
}

export default App
