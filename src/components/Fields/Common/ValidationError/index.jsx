import React from 'react'
import { ErrorMessage } from 'formik'

const LeanValidationError = ({ children, ...props }) => {
  return (
    <div {...props} className="invalid-feedback d-block">
      {children}
    </div>
  )
}

const FormikValidationError = ({ name, ...props }) => {
  return (
    <ErrorMessage name={name}>
      {msg => <LeanValidationError {...props}>{msg}</LeanValidationError>}
    </ErrorMessage>
  )
}

export const ValidationError = LeanValidationError
export default FormikValidationError
