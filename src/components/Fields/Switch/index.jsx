import React from 'react'
import { useField } from 'formik'
import Label from '../Common/Label'
import ValidationError from '../Common/ValidationError'

const LeanSwitch = ({ children, ...props }) => {
  return (
    <div className="custom-control custom-switch">
      <input
        type="checkbox"
        className="custom-control-input"
        {...props}
        checked={props.value === true}
        id={props.name}
      />
      {children}
    </div>
  )
}

const FormikSwitch = ({ label, ...props }) => {
  const [field] = useField({ type: 'checkbox', ...props })
  return (
    <div className="form-group">
      <LeanSwitch {...field} {...props}>
        <Label className="custom-control-label" htmlFor={props.name}>
          {label}
        </Label>
      </LeanSwitch>
      <ValidationError name={props.name} />
    </div>
  )
}

export const Switch = LeanSwitch
export default FormikSwitch
