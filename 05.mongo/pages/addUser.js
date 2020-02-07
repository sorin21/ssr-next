import React, { Component } from "react";
import { Formik } from 'formik';
import axios from 'axios';

import MainLayout from '../components/layouts/mainLayout'

class UserForm extends Component {

  handleSubmit = (values, actions) => {
    console.log('values', values)
    axios({
      method: 'POST',
      url: '/api/v1/users',
      data: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response.data)
      // if the submit button is disabled, so setting the isSubmit back to false
      actions.setSubmitting(false)
      // clear the form
      actions.resetForm()
    })
  }

  handleRules = (values) => {
    // this errors are *
    let errors = {}

    if (!values.firstname) { errors.firstname = "Required" }

    if (!values.lastname) { errors.lastname = "Required" }

    if (!values.age) {
      errors.age = "Required"
    } else if (values.age < 20) {
      errors.age = 'Sorry you need to be older than 20'
    }

    return errors;
  }


  render() {
    return (
      <MainLayout>
        <h1>Add user</h1>
        <Formik
          initialValues={{ firstname: '', lastname: '', age: '' }}
          validate={(values) => this.handleRules(values)}
          onSubmit={(values, actions) => this.handleSubmit(values, actions)}
        >
          {({
            // * this errors
            errors,
            values,
            handleSubmit,
            handleChange,
            isSubmitting,
            handleBlur,
            // true only if we touch the input
            touched
          }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstname"
                    placeholder="Enter name"
                    value={values.firstname}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.firstname && touched.firstname ?
                    <div style={{ color: 'red' }}>{errors.firstname}</div>
                    : null}
                </div>

                <div className="form-group">
                  <label>Lastname</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastname"
                    placeholder="Enter lastname"
                    value={values.lastname}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.lastname && touched.lastname ?
                    <div style={{ color: 'red' }}>{errors.lastname}</div>
                    : null}
                </div>

                <div className="form-group">
                  <label>Age</label>
                  <input
                    type="text"
                    className="form-control"
                    name="age"
                    placeholder="Enter age"
                    value={values.age}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.age && touched.age ?
                    <div style={{ color: 'red' }}>{errors.age}</div>
                    : null}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >Submit</button>
              </form>
            )}
        </Formik>
      </MainLayout>
    )
  }

}

export default UserForm;