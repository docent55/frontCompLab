import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { addSubdivisionData } from '../../../redux/subdivisionReducer';

const AddSubdivisionForm = (props) => {
    return ( 
    <>
    <h1>Добавить новое подразделение</h1>
    <form onSubmit={props.handleSubmit}>
    <div>
                <div>
                    <Field placeholder={'Подразделение'} name={'subdivision'} component={'input'} />
                </div>       
    </div>
            <div>
                <button>Add</button>
            </div>
            
    </form>
    </> )}

const AddSubdivisionReduxForm = reduxForm({form: 'addSubdivision'})(AddSubdivisionForm);

const AddSubdivision = (props) => {
    const onSubmit = (formData) => {
        props.addSubdivisionData(formData.subdivision);
    }
    
    return <div>
        <AddSubdivisionReduxForm onSubmit={onSubmit}/>
    </div>
}



export default connect(null, {addSubdivisionData})(AddSubdivision);

