import React from 'react'

import { Formik, Form } from 'formik'
import Switch from './Fields/Switch'
import Select from './Fields/Select'
import RadioGroup from './Fields/RadioGroup'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  lastName: Yup.string().required('Required'),
  firstName: Yup.string().required('Required'),
  eMail: Yup.string().required('Required'),
  streetAddress: Yup.string().required('Required')
})

const Parameters = () => {
  return (
    <Formik
      initialValues={{
        duration: 12,
        upfrontPayment: false,
        amountOfGigabytes: '5'
      }}
      validationSchema={validationSchema}
    >
      <Form className="row">
        <div className="col-sm-6">
          <Select name="duration" label="Duration">
            <option value={3}>3 Months</option>
            <option value={6}>6 Months</option>
            <option value={12}>12 Months</option>
          </Select>

          <div className="form-group">
            <div>Amount of gigabytes in a cloud</div>
            <RadioGroup
              name="amountOfGigabytes"
              id="amountOfGigabytes_3"
              label="3"
              value="3"
              inline
            />
            <RadioGroup
              name="amountOfGigabytes"
              id="amountOfGigabytes_5"
              label="5"
              value="5"
              inline
            />
            <RadioGroup
              name="amountOfGigabytes"
              id="amountOfGigabytes_10"
              label="10"
              value="10"
              inline
            />
            <RadioGroup
              name="amountOfGigabytes"
              id="amountOfGigabytes_20"
              label="20"
              value="20"
              inline
            />
            <RadioGroup
              name="amountOfGigabytes"
              id="amountOfGigabytes_30"
              label="30"
              value="30"
              inline
            />
            <RadioGroup
              name="amountOfGigabytes"
              id="amountOfGigabytes_50"
              label="50"
              value="50"
              inline
            />
          </div>

          <Switch name="upfrontPayment" label="Upfront payment" />
        </div>
      </Form>
    </Formik>
  )
}

export default Parameters
