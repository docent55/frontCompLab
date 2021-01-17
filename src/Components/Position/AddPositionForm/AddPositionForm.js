import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { addPositionData } from '../../../redux/positionReducer';

import { requiredFields, maxLengthCreator } from '../../../utils/validators/validators';

import { Textarea } from '../../common/FormsControls/FormsControls'

const maxLength10 = maxLengthCreator(10);

const AddPositionForm = (props) => {
    return ( 
    <>
    <h1>Добавить новую должность</h1>
    <form onSubmit={props.handleSubmit}>
    <div>
                <div>
                    <Field placeholder={'Должность'} name={'position'} component={Textarea} 
                    validate={[requiredFields, maxLength10]}/>
                </div>       
    </div>
            <div>
                <button>Add</button>
            </div>
            
    </form>
    </> )}

const AddPositionReduxForm = reduxForm({form: 'addPosition'})(AddPositionForm);

const AddPosition = (props) => {
    const onSubmit = (formData) => {
        props.addPositionData(formData.position);
    }
    
    return <div>
        <AddPositionReduxForm onSubmit={onSubmit}/>
    </div>
}



export default connect(null, {addPositionData})(AddPosition);

