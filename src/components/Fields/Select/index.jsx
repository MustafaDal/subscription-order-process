import React from 'react'
import { useField } from 'formik'
import Label from '../Common/Label'
import ValidationError from '../Common/ValidationError'

const LeanSelect = props => {
  return <select {...props} />
}

const FormikSelect = ({ label, name, ...props }) => {
  const [field] = useField({ name, ...props })
  return (
    <div className="form-group">
      <Label htmlFor={name}>{label}</Label>
      <LeanSelect {...field} {...props} className="form-control" />
      <ValidationError name={name} />
    </div>
  )
}

export const Select = LeanSelect
export default FormikSelect
