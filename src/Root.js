// @flow
import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {connect} from "react-redux";
import RadPageComponent from "./MainPage/RadPageComponent";

type Props = {
    connected: boolean
}

class Root extends React.Component<Props> {

    render() {
       return (
            <BrowserRouter>
                <Switch>
                    <Route path='/rad' component={RadPageComponent}/>
                    <Route render={(props) => <Page404 />}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

function Page404() {
    return (<div>404</div>)
}

export default connect((state, ownProps) => {return {connected: state.rad.iam.connected}})(Root)