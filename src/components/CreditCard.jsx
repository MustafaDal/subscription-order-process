import React from 'react'
import { Formik, Form } from 'formik'
import Input from './Fields/Input'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  number: Yup.number().required('Required'),
  expirationDate: Yup.number().required('Required'),
  securityCode: Yup.number().required('Required')
})

const CreditCard = () => {
  return (
    <Formik
      initialValues={{
        number: '',
        expirationDate: '',
        securityCode: ''
      }}
      validationSchema={validationSchema}
    >
      <Form className="row">
        <div className="col-sm-6">
          <Input type="number" name="number" label="Card number" />
          <Input
            type="date"
            name="expirationDate"
            label="Card expiration date"
          />
          <Input type="number" name="securityCode" label="Card security code" />
        </div>
      </Form>
    </Formik>
  )
}

export default CreditCard
