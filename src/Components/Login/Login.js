import React from 'react';
// import { Form, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import classes from '../common/FormsControls/FormsControl.module.css';

import { login } from '../../redux/authReducer';

import { requiredFields, maxLengthCreator } from '../../utils/validators/validators';
import { Input, Textarea } from '../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => {
    return (
        <form className={classes.form} onSubmit={props.handleSubmit}>
            <h3>Вход</h3>
            <div className={classes.formRow}>
                <Field placeholder={'Login'} name={'login'} component={Textarea} 
                validate={[requiredFields]} /> 
            </div>
            <div className={classes.formRow}>
                <Field placeholder={'Password'} name={'password'} component={Textarea}
                validate={[requiredFields]} />
            </div>
            { props.error && <div className={classes.formSummaryError}>
                {props.error}
            </div> }

            <div >
                <button className={classes.button}>Login</button>
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