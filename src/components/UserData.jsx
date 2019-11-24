import React from 'react'
import { Formik, Form } from 'formik'
import Input from './Fields/Input'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  lastName: Yup.string().required('Required'),
  firstName: Yup.string().required('Required'),
  eMail: Yup.string().required('Required'),
  streetAddress: Yup.string().required('Required')
})

const UserData = props => {
  const { children, initialValues, ...formikProps } = props

  return (
    <Formik
      initialValues={{
        lastName: '',
        firstName: '',
        eMail: '',
        streetAddress: '',
        ...initialValues
      }}
      validationSchema={validationSchema}
      {...formikProps}
    >
      <Form>
        <Input name="lastName" label="Last name" />
        <Input name="firstName" label="First name" />
        <Input name="eMail" label="Email" />
        <Input name="streetAddress" label="Street Address" />

        {children}
      </Form>
    </Formik>
  )
}

export default React.memo(UserData)
