import React from 'react'
import { Formik, Form } from 'formik'
import Input from './Fields/Input'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
})

const UserData = () => {
  return (
    <Formik
      initialValues={{
        lastName: '',
        firstName: '',
        eMail: '',
        streetAddress: ''
      }}
      validationSchema={validationSchema}
    >
      <Form className="row">
        <div className="col-sm-6">
          <Input name="lastName" label="Last name" />
          <Input name="firstName" label="First name" />
          <Input name="eMail" label="Email" />
          <Input name="streetAddress" label="Street Address" />
        </div>
      </Form>
    </Formik>
  )
}

export default UserData
