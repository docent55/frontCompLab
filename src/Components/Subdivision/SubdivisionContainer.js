import React from 'react';
import { connect } from 'react-redux';

import Subdivision from './Subdivision';

import { getSubdivisionData, deleteSubdivisionData } from '../../redux/subdivisionReducer';

class SubdivisionContainer extends React.Component {

    componentDidMount() {
        this.props.getSubdivisionData();
    }
    
    render() {   
        
    return <Subdivision {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    ranks: state.subdivisions.subdivisions
});

export default connect(mapStateToProps, { getSubdivisionData, deleteSubdivisionData })(SubdivisionContainer);