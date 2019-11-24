import React from 'react'
import { Formik, Form } from 'formik'
import Checkbox from './Fields/Checkbox'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  termsAndConditions: Yup.boolean().oneOf([true], 'Should be checked')
})

const Confirmation = props => {
  const { children, initialValues, ...formikProps } = props

  return (
    <Formik
      initialValues={{
        termsAndConditions: false,
        ...initialValues
      }}
      validationSchema={validationSchema}
      {...formikProps}
    >
      <Form>
        <Checkbox
          id="termsAndConditions"
          name="termsAndConditions"
          label="I agree terms and conditions."
        />

        {children}
      </Form>
    </Formik>
  )
}

export default Confirmation
