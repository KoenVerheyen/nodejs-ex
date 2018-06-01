// @flow
import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import {Alert} from 'antd'
import QueryComponent from '../query/QueryComponent'
import type {Match, Location} from "react-router-dom";

type Props = {
    match: Match,
    location: Location
}


function get404Description(location, retryLocation) {
    return (<div>{'This page could not be found: ' + location.pathname}<br/>
        {'Click '}<Link to={retryLocation}>{'here'}</Link>{' to retry.'}
    </div>)
}


export default function RadRoutingComponent({match, location} : Props) {
    return (<Switch>
        <Route path={`${match.path}/query`} component={QueryComponent} />
        <Route render={(props) => <div><Alert message='Page not found' description={get404Description(props.location, match.path)} type='error' showIcon /></div>}/>
    </Switch>)
}