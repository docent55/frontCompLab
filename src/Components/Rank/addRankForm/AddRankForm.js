import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { addRankData } from '../../../redux/rankReducer';

const AddRankForm = (props) => {
    return ( 
    <>
    <h1>Добавить новое звание</h1>
    <form onSubmit={props.handleSubmit}>
    <div>
                <div>
                    <Field placeholder={'Звание'} name={'rank'} component={'input'} />
                </div>       
    </div>
            <div>
                <button>Add</button>
            </div>
            
    </form>
    </> )}

const AddRankReduxForm = reduxForm({form: 'addRank'})(AddRankForm);

const AddRank = (props) => {
    const onSubmit = (formData) => {
        props.addRankData(formData.rank);
    }
    
    return <div>
        <AddRankReduxForm onSubmit={onSubmit}/>
    </div>
}



export default connect(null, {addRankData})(AddRank);

