import React, { Component } from 'react'
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { sendMessage, clearMessage } from '../store/actions';

class Contact extends Component {
  state = {
    msgDone: false
  }
  handleSubmit = (values, actions) => {
    this.props.onSendMessage(values);
    this.setState({ msgDone: true });
    actions.setSubmitting(false);
    actions.resetForm();



    // axios({
    //   method: 'POST',
    //   url: '/api/v1/users',
    //   data: JSON.stringify(values),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }).then(response => {
    //   console.log(response.data)
    //   // if the submit button is disabled, so setting the isSubmit back to false
    //   actions.setSubmitting(false)
    //   // clear the form
    //   actions.resetForm()
    // })
  }

  handleRules = (values) => {
    // this errors are *
    let errors = {}
    const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if (!values.name) { errors.name = "Required" }
    // if (!values.email) { errors.email = "Required" }
    // if (!values.message) { errors.message = "Required" }

    for (let prop in values) {
      // if any value that is the prop is empty 
      if (!values[prop]) { errors[prop] = "Required" }
    }
    if (!reg.test(values.email)) {
      errors.email = "Not a valid email"
    }
    // if (!values.age) {
    //   errors.age = "Required"
    // } else if (values.age < 20) {
    //   errors.age = 'Sorry you need to be older than 20'
    // }

    return errors;
  }
  render() {
    const showForm = (
      <Formik
        // we must have 3 arguments: initialValues, validate, onSubmit
        initialValues={{ name: '', email: '', message: '' }}
        validate={(values) => this.handleRules(values)}
        onSubmit={(values, actions) => this.handleSubmit(values, actions)}
      >
        {/* we have a function that will return a form */}
        {({
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
                  name="name"
                  placeholder="Enter name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.name && touched.name ?
                  <div style={{ color: 'red' }}>{errors.name}</div>
                  : null}
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.email && touched.email ?
                  <div style={{ color: 'red' }}>{errors.email}</div>
                  : null}
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Enter message"
                  value={values.message}
                  onBlur={handleBlur}
                  onChange={handleChange}
                ></textarea>
                {errors.message && touched.message ?
                  <div style={{ color: 'red' }}>{errors.message}</div>
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
    )
    return (
      <>
        <div className="title_page">
          <h1>Contact us</h1>
        </div>
        <div className="content_wrapper">
          <div className="inner">
            <h1>Feel free to contact us</h1>

            {!this.state.msgDone ? showForm : <div>We will contact you in a short time!</div>}


          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    messages: state.messages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSendMessage: (values) => dispatch(sendMessage(values))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
