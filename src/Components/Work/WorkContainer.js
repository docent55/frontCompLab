import React from 'react';
import { connect } from 'react-redux';

import Work from './Work';

import { getWorkData } from '../../redux/workReducer';

class WorkContainer extends React.Component {

    componentDidMount() {
        this.props.getWorkData();
    }
    
    render() {   
        
    return <Work {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    work: state.work.materials
});

export default connect(mapStateToProps, { getWorkData })(WorkContainer);