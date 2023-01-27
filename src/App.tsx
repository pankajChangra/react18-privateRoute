import React from "react"
import {connect} from "react-redux"
import {BrowserRouter as Router} from "react-router-dom"
import AppRoutes from "./AppRoutes";

export interface Alert {
  message:string
  statusCode:number
  error?:string
}

export interface RootState{
  auth : any;
  user : any;
  alert : Alert
  app : any
}


// props.auth will come from backend after login 

const App:React.FC<any>=(props?)=>{
    if(!props)
       return null
    return (
      <>
        <Router>
            <AppRoutes auth={props.auth} alert={props.alert}/>
        </Router>
      </>
    )
}

function mapStateToProps(state:RootState){
  return {
      auth:state.auth,
      alert:state.alert
  }
}


export default connect(mapStateToProps)(App)