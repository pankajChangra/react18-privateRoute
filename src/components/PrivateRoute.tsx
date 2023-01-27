import React from 'react';
import { Outlet, Navigate} from 'react-router-dom';

interface propsData {
	isAuthenticated: boolean
	authenticationPath: string
}

export const PrivateRoute = (props: propsData) => {
	return (
		props.isAuthenticated ? <Outlet/> : <Navigate to="/" />
	)
}
