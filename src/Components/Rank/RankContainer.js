import React from 'react';
import { connect } from 'react-redux';

import Rank from './Rank';

import { getRankData, deleteRankData } from '../../redux/rankReducer';

class RankContainer extends React.Component {

    componentDidMount() {
        this.props.getRankData();
    }
    
    render() {   
        
    return <Rank {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    ranks: state.ranks.ranks
});

export default connect(mapStateToProps, { getRankData, deleteRankData })(RankContainer);