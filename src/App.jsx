import React, { useCallback, useMemo } from 'react'
import { costCalculator } from './utils'

import ComponentByStep from './components/ComponentByStep'
import StepPreview from './components/StepPreview'
import useStepper from './hooks/Stepper'

const App = () => {
  const { state, prev: goPrev, next: goNext, setValue } = useStepper()

  const { duration, amountOfGigabytes, upfrontPayment } = state.values[0] || {}
  const price = useMemo(() => {
    return costCalculator({ duration, amountOfGigabytes, upfrontPayment })
  }, [duration, amountOfGigabytes, upfrontPayment])

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
        <div className="card-header d-flex">
          Subscription order process

          <StepPreview currentStep={state.currentStep} limit={4} />
        </div>
        <div className="card-body">
          {state.currentStep > 0 && (
            <h5 className="text-right">
              Price:
              <span className="badge badge-pill badge-warning ml-2">
                {price}
              </span>
            </h5>
          )}

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
