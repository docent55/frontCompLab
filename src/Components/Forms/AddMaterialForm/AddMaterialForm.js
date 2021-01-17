import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { AddMaterialData } from '../../../redux/workReducer';

const AddMaterialForm = (props) => {
    

    return ( 
    <>
    <h1>fgfg</h1>
    <form onSubmit={props.handleSubmit}>
    <div>

                <div>
                    <Field  name={`subdivisions`} component={'select'} label={'subdivision'}>
                        <option value={null} >выберите</option>
                        {props.subdivisions.map( u => <option key={u.id}
                        value={u.id}>{u.name}</option>)}
                    </Field>  
                </div>
                <div>
                    <Field  name={`employees`} component={'select'} label={'employees'}>
                        <option value={null} >выберите</option>
                        {props.employees.map( u => <option key={u.id}
                        value={u.id}>{u.name}</option>)}
                    </Field> 
                </div>
                <div>
                    <Field  name={`typeWork`} component={'select'} label={'typeWork'}>
                        <option value={null} >выберите</option>
                        {props.typeWork.map( u => <option key={u.id}
                        value={u.id}>{u.type_work}</option>)}
                    </Field> 
                </div>
                <div>
                    <Field  name={`initiators`} component={'select'} label={'initiators'}>
                        <option value={null} >выберите</option>
                        {props.initiators.map( u => <option key={u.id}
                        value={u.id}>{u.family_name}</option>)}
                    </Field> 
                </div>
                <div>
                    <Field placeholder={'Порядковый номер'} name={'number'} component={'input'} />
                </div>
                <div>
                    <Field placeholder={'Номер материала'} name={'serial_number'} component={'input'} />
                </div>
                <div>
                    <Field placeholder={'Дата регистрации'} name={'receipt_date'} component={'input'} type={'date'} />
                </div>
               
    </div>
            <div>
                <button>Add</button>
            </div>
            
    </form>
    </> )}

const AddMateriaReduxForm = reduxForm({form: 'addMaterial'})(AddMaterialForm);

const AddMaterial = (props) => {
    
    const onSubmit = (formData) => {
        props.AddMaterialData(formData.subdivisions, formData.employees, formData.typeWork, 
            formData.initiators, formData.number, formData.serial_number, formData.receipt_date );
    }

    return <div>
        <AddMateriaReduxForm onSubmit={onSubmit} subdivisions={props.subdivisions} employees={props.employees}
        typeWork={props.typeWork} initiators={props.initiators} />
    </div>
}


export default connect(null, {AddMaterialData})(AddMaterial);

// const mapStateToProps = (state) => ({
//     positions: state.positions.positions
// });



// export default connect(null, {})(AddMaterial);

