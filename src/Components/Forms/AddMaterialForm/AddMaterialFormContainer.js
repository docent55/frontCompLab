import React from 'react';
import { connect } from 'react-redux';

import AddMaterial from './AddMaterialForm';

import { getAddWorkData } from '../../../redux/workReducer';

class AddWorkContainer extends React.Component {

    componentDidMount() {
        this.props.getAddWorkData();
    }
    
    render() {   
        if (!this.props.addWorkSuccessIniciator) {
            return <h1>Preloa111111111111111111111111111111111111111111111111111111d</h1>     
        }


    return <AddMaterial subdivisions={this.props.subdivisions} employees={this.props.employees} 
    typeWork={this.props.typeWork} initiators={this.props.initiators} />
    }
}

const mapStateToProps = (state) => ({
    addWorkSuccessIniciator: state.work.addWorkSuccessIniciator,
    subdivisions: state.subdivisions.subdivisions,
    employees: state.employees.employees,
    typeWork: state.typeWork.typeWork,
    initiators: state.initiators.initiatorsData,

});

export default connect(mapStateToProps, { getAddWorkData })(AddWorkContainer);