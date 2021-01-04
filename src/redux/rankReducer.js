import { rankAPI } from '../API/API';

const SET_RANK_DATA = 'SET_RANK_DATA';

let initialState = {
    ranks: [

    ]
};

export const rankReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_RANK_DATA:
            
            return {...state, ranks: [...action.ranks]}
            
        default:
            return state;
    }
};

export const setRankData = (ranks) => ({type: SET_RANK_DATA, ranks});

export const getRankData = () => async (dispatch) => {
    let response = await rankAPI.getRanks();
    console.log(response)
    if (response.status === 200) {
        let ranks = response.data;
        console.log(ranks);
        dispatch(setRankData(ranks));
    }
}

export const addRankData = (rank) => async (dispatch) => {
    
    let response = await rankAPI.addRank(rank);
    console.log(response)
    
    if (response.status === 201) {
        dispatch(getRankData());
    }
}

export const deleteRankData = (id) => async (dispatch) => {

    let response = await rankAPI.deleteRank(id);

    if (response.status === 204) {
        dispatch(getRankData());
    }
}