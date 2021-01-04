import React, { Component } from 'react';

import AddRankForm from './addRankForm/AddRankForm';

export default class Rank extends Component {
    render() {

        
        

        
        const ranksList = this.props.ranks.map(e =>  
            <li key={e.id}>{e.name}<button onClick={() => this.props.deleteRankData(e.id)}>del</button></li> 
            
        );
        
        return (
            <>
            {ranksList}
            <br/>
            <AddRankForm />
            </>
        );
    }
}