import React, { Component } from 'react';

import AddInitiatorForm from './AddInitiatorForm/AddInitiatorForm';

export default class Position extends Component {
    render() {
        
        // const positionList = this.props.positions.map(e =>  
        //     <li key={e.id}>{e.name}<button onClick={() => this.props.deletePositionData(e.id)}>del</button></li> 
            
        // );
        
        return (
            <>
            
            <br/>
            <AddInitiatorForm {...this.props} />
            </>
        );
    }
}