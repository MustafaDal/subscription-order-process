import { useCallback, useReducer } from 'react'

const initialState = {
  limit: 3,
  currentStep: 0,
  values: []
}

function reducer(state, action) {
  switch (action.type) {
    case 'next':
      if (state.currentStep === state.limit) return state
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

const Stepper = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const prev = useCallback(() => dispatch({ type: 'prev' }), [dispatch])
  const next = useCallback(() => dispatch({ type: 'next' }), [dispatch])
  const setValue = useCallback(
    values => dispatch({ type: 'set_value', payload: values }),
    [dispatch]
  )

  return {
    state,
    prev,
    next,
    setValue
  }
}

export default Stepper
