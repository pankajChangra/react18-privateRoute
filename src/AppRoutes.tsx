import React from "react"
import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRoute } from "./components/PrivateRoute"
import Home from "./container/Home"
import SignIn from "./components/SignIn"
import { defaultHomePage } from "./constant"

const AppRoutes: React.FC<any> = (props) => {
    const isAuthenticated = !!(props.auth && props.auth.user && props.auth.user.id);
    const defaultProtectedRouteProps: any = {
        isAuthenticated: isAuthenticated,
        authenticationPath: "/"
    };
    const RedirectTo = (props: any) => isAuthenticated ? <Navigate to={`/${defaultHomePage}`} /> : <SignIn {...props} />;

    return (
        <Routes>
            <Route path="/login" element={<Home />} />
            <Route path="/" element={RedirectTo(props)} />
            <Route element={
                <PrivateRoute {...defaultProtectedRouteProps} />}>
                <Route element={<SetUp />} path="/dashboard" />
            </Route>
        </Routes>
    )
}
export default AppRoutes
