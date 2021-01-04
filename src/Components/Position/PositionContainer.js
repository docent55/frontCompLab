import React from 'react';
import { connect } from 'react-redux';

import Position from './Position';

import { getPositionData, deletePositionData } from '../../redux/positionReducer';

class PositionContainer extends React.Component {

    componentDidMount() {
        this.props.getPositionData();
    }
    
    render() {   
        
    return <Position {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    positions: state.positions.positions
});

export default connect(mapStateToProps, { getPositionData, deletePositionData })(PositionContainer);