import React, { Component } from 'react';

import AddSubdivisionForm from './addSubdivisionForm/AddSubdivisionForm';

export default class Subdivision extends Component {
    render() {

        
        

        
        const subdivisionsList = this.props.ranks.map(e =>  
            <li key={e.id}>{e.name}<button onClick={() => this.props.deleteSubdivisionData(e.id)}>del</button></li> 
            
        );
        
        return (
            <>
            {subdivisionsList}
            <br/>
            <AddSubdivisionForm />
            </>
        );
    }
}