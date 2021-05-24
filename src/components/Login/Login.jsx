import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../formControl/FormControl";
import {maxLengthCreator, required} from "../../validation/validator";

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

let maxLengh10 = maxLengthCreator(5)

const LoginForm = (props) => {
  return <div>
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Input}
               placeholder={'Login'} name={'login'}
               validate={[required, maxLengh10]}/>
      </div>
      <div>
        <Field component={Input}
               placeholder={'Password'} name={"password"}
               validate={[required, maxLengh10]}/>
      </div>
      <div>
        <Field component={Input} type='checkbox'
               placeholder={'Login'} name={"remember me"}
               validate={[required, maxLengh10]}/>remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  </div>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login;