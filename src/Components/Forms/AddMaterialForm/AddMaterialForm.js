import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const AddMaterialForm = (props) => {
    return ( 
    <>
    <h1>fgfg</h1>
    <form onSubmit={props.handleSubmit}>
    <div>
                <div>
                    <Field placeholder={'Номер дела'} name={'login'} component={'input'} />
                </div>
                <div>
                   <Field name={'type_work'} component={'select'} >
                    <option value="grapefruit">Грейпфрут</option>
                    <option value="lime">Лайм</option>
                    </Field>  
                </div>
               
    </div>
            
    </form>
    </> )}

const AddMateriaReduxForm = reduxForm({form: 'addMaterial'})(AddMaterialForm);

const AddMaterial = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password);
    }
    return <div>
        <AddMateriaReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    state: 
});

export default connect(mapStateToProps, {})(AddMaterial);

