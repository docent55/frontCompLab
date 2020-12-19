import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';

import { logout, getAuthUserData } from '../../redux/authReducer';




class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
    }
    

    render() {   
    return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    username: state.auth.username
});

export default connect(mapStateToProps, {logout, getAuthUserData})(HeaderContainer);

