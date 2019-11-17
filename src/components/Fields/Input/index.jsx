import React from 'react'
import { useField } from 'formik'
import Label from '../Common/Label'
import ValidationError from '../Common/ValidationError'

const LeanInput = props => {
  return <input {...props} />
}

const FormikInput = ({ label, name, ...props }) => {
  const [field] = useField({ name, ...props })
  return (
    <div className="form-group">
      <Label htmlFor={name}>{label}</Label>
      <LeanInput {...field} {...props} className="form-control" />
      <ValidationError name={name} />
    </div>
  )
}

export const Input = LeanInput
export default FormikInput
