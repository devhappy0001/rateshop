import React from 'react';
import {Outlet,Navigate} from 'react-router-dom';
import {connect} from 'react-redux';

const GuestRoute = (props) => {
    
    //determine if authorized, from redux-store
    const isLoggedIn = props.auth.isLoggedIn;  
    
    return !isLoggedIn ? <Outlet/> : <Navigate to='/'/>
}

const mapStateToProps = (state) => {

    return {

        auth : state.auth 
    }
}

export default connect(mapStateToProps,null)(GuestRoute);