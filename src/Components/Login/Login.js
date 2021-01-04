import React from 'react';
// import { Form, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import classes from '../common/FormsControls/FormsControl.module.css';

import { login } from '../../redux/authReducer';

import { requiredFields, maxLengthCreator } from '../../utils/validators/valodators';
import { Input, Textarea } from '../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <div>
            Login:
                <Field placeholder={'Login'} name={'login'} component={Input} 
                validate={[requiredFields]} /> 
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input}
                validate={[requiredFields]} />
            </div>
            { props.error && <div className={classes.formSummaryError}>
                {props.error}
            </div> }

            <div>
                <button>Login</button>
            </div>
        </form>

    //     <Form className=''>
    // <Form.Group controlId="formBasicEmail">
    //     <Form.Label>Login</Form.Label>
    // <Field component={ <Form.Control type="text" placeholder="Enter login" />} /> 
    //     <Form.Text className="text-muted">
    //      ты же не абыл свой логи и пароль?
    //     </Form.Text>
    // </Form.Group>

    // <Form.Group controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" />
    // </Form.Group>
    // <Form.Group controlId="formBasicCheckbox">
    //     <Form.Check type="checkbox" label="Check me out" />
    // </Form.Group>
    // <Button variant="primary" type="submit">
    // Submit
    // </Button>
    // </Form>
     )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password);
    }
    return <div>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default connect(null, {login})(Login);