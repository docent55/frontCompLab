import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import {addInitiatorData} from '../../../redux/initiatorReducer';

const AddInitiatorForm = (props) => {
    
    return ( 
    <>
    <h1>Добавить нового инициатора</h1>
    <form onSubmit={props.handleSubmit}>
    <div>
                <div>
                    <div>
                    <Field placeholder={'Фамилия'} name={'family_name'} component={'input'} />
                    </div>
                    <div>
                    <Field placeholder={'Имя'} name={'first_name'} component={'input'} />
                    </div>
                    <div>
                    <Field placeholder={'Отчество'} name={'second_name'} component={'input'} />
                    </div>
                    <div>
                    <Field  name={`subdivisions`} component={'select'} label={'subdivision'}>
                        <option value={null} >выберите</option>
                        {props.subdivisions.map( u => <option key={u.id}
                        value={u.id}>{u.name}</option>)}
                    </Field>
                    <div>
                    <Field name={`positions`} component={'select'} label={'positions'}>
                        <option value={null} >выберите</option>
                        {props.positions.map( u => <option key={u.id}
                        value={u.id}>{u.name}</option>)}
                    </Field>
                    </div>
                    <div>
                    <Field name={`ranks`} component={'select'} label={'ranks'}>
                        <option value={null} >выберите</option>
                        {props.ranks.map( u => <option key={u.id}
                        value={u.id}>{u.name}</option>)}
                    </Field>
                    </div>
                    
                    </div>
                </div>       
    </div>
            <div>
                <button>Add</button>
            </div>
            
    </form>
    </> )}

const AddInitiatorReduxForm = reduxForm({form: 'addInitiator'})(AddInitiatorForm);


const AddInitiator = (props) => {
    
    const onSubmit = (formData) => {
        
        props.addInitiatorData(formData.family_name, formData.first_name, formData.second_name, formData.ranks, formData.positions, formData.subdivisions);
    }
    
    return <div>
        <AddInitiatorReduxForm onSubmit={onSubmit} positions={props.positions} 
        subdivisions={props.subdivisions} 
        ranks={props.ranks}/>
    </div>
}

export default connect(null, {addInitiatorData})(AddInitiator);

// const Login = (props) => {
//     const onSubmit = (formData) => {
//         props.login(formData.login, formData.password);
//     }
//     return <div>
//         <LoginReduxForm onSubmit={onSubmit}/>
//     </div>
// }

// export default connect(null, {login})(Login);

// export default AddInitiator;

