import React from 'react'
import { useField } from 'formik'
import classNames from 'classnames'
import Label from '../Common/Label'
import ValidationError from '../Common/ValidationError'

const LeanCheckbox = ({ children, label, inline, className, ...props }) => {
  return (
    <div className={classNames('form-check', { 'form-check-inline': inline }, className)}>
      <input className="form-check-input" type="checkbox" {...props} />
      <Label className="form-check-label" htmlFor={props.id}>
        {label}
      </Label>
    </div>
  )
}

const FormikCheckbox = props => {
  const [field] = useField({ type: 'checkbox', ...props })

  return (
    <div className="form-group">
      <LeanCheckbox {...field} {...props} />
      <ValidationError name={props.name} />
    </div>
  )
}

export const Checkbox = LeanCheckbox
export default FormikCheckbox
