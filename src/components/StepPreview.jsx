import React from 'react'
import classNames from 'classnames'

import { Checkbox } from './Fields/Checkbox'

const StepPreview = ({ currentStep, limit, children }) => {
  const fakeList = Array.from(Array(limit))
  return fakeList.map((item, index) => (
    <Checkbox
      key={index}
      inline
      disabled
      checked={currentStep > index}
      className={classNames({
        'ml-auto': index === 0,
        'mr-0': index === limit - 1
      })}
    />
  ))
}

export default StepPreview
