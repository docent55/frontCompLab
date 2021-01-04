import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';

import { logout } from '../../redux/authReducer';
import { initializHeader } from '../../redux/appReducer';

import { compose } from 'redux';
import { withRouter } from 'react-router';




class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.initializHeader();
    }
    

    render() { 

    // if (!this.props.initialized) {
    //     return <h1>Preloa111111111111111111111111111111111111111111111111111111d</h1>
        
//    }
    return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    username: state.auth.username,
    initialized: state.app.initialized
});

export default compose(
    withRouter, 
    connect(mapStateToProps, {logout, initializHeader}))(HeaderContainer);

// export default connect(mapStateToProps, {logout, getAuthUserData})(HeaderContainer);

