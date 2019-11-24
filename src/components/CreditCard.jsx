import React from 'react'
import { Formik, Form } from 'formik'
import Input from './Fields/Input'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  number: Yup.number().required('Required'),
  expirationDate: Yup.date().required('Required'),
  securityCode: Yup.number().required('Required')
})

const CreditCard = props => {
  const { children, initialValues, ...formikProps } = props

  return (
    <Formik
      initialValues={{
        number: '',
        expirationDate: '',
        securityCode: '',
        ...initialValues
      }}
      validationSchema={validationSchema}
      {...formikProps}
    >
      <Form>
        <Input type="number" name="number" label="Card number" />
        <Input type="date" name="expirationDate" label="Card expiration date" />
        <Input type="number" name="securityCode" label="Card security code" />

        {children}
      </Form>
    </Formik>
  )
}

export default React.memo(CreditCard)
