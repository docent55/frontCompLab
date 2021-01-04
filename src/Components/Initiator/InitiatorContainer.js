import React from 'react';
import { connect } from 'react-redux';

import AddInitiator from './AddInitiatorForm/AddInitiatorForm';

import { getInitiatorData } from '../../redux/initiatorReducer';



class InitiatorContainer extends React.Component {

    componentDidMount() {
        this.props.getInitiatorData();
        
    }


    
    render() {   
    if (!this.props.initialized) {
        return <h1>Preloa111111111111111111111111111111111111111111111111111111d</h1>     
        }
        
    return <AddInitiator positions={this.props.positions}
    subdivisions={this.props.subdivisions}
    ranks={this.props.ranks}/>
    }
}

const mapStateToProps = (state) => ({
    positions: state.positions.positions,
    ranks: state.ranks.ranks,
    subdivisions: state.subdivisions.subdivisions,
    initialized: state.initiators.initializedSuccessIniciator,
});

export default connect(mapStateToProps, { getInitiatorData })(InitiatorContainer);