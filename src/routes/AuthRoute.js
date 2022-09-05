import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import {connect} from 'react-redux';

const AuthRoute = (props) => {
    
    //determine if authorized, from redux-store
    const isLoggedIn = props.auth.isLoggedIn;

    return isLoggedIn ? <Outlet/> : <Navigate to='/login'/>
}

const mapStateToProps = (state) => {

    return {

        auth:state.auth
    }
}

export default connect(mapStateToProps,null)(AuthRoute);
