import React, { Fragment } from 'react'
import { useField } from 'formik'
import classNames from 'classnames'
import Label from '../Common/Label'
import ValidationError from '../Common/ValidationError'

const LeanCheckbox = ({ children, label, inline, ...props }) => {
  return (
    <div className={classNames('form-check', { 'form-check-inline': inline })}>
      <input className="form-check-input" type="radio" {...props} />
      <Label className="form-check-label" htmlFor={props.id}>
        {label}
      </Label>
    </div>
  )
}

const FormikCheckbox = props => {
  const [field] = useField({ type: 'radio', ...props })

  return (
    <Fragment>
      <LeanCheckbox {...field} {...props} />
      <ValidationError name={props.name} />
    </Fragment>
  )
}

export const Checkbox = LeanCheckbox
export default FormikCheckbox
