import React from "react";
import {Field, reduxForm} from "redux-form";

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

const LoginForm = (props) => {
  return <div>
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={'input'} placeholder={'Login'} name={'login'}/>
      </div>
      <div>
        <Field component={'input'} placeholder={'Password'} name={"password"}/>
      </div>
      <div>
        <Field component={'input'} type='checkbox' placeholder={'Login'} name={"remember me"}/>remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  </div>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login;