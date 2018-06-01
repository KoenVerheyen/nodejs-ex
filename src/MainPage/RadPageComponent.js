// @flow
import React from 'react'
import getBreadCrumb from './BreadCrumb'
import type {Match, Location} from "react-router-dom";
import RadRoutingComponent from "./RadRoutingComponent";

type Props = {
    match: Match,
    location: Location
}

export function RadPageComponent({match, location} : Props) {
    return (
        <div
            title='RAD'
            breadcrumb={getBreadCrumb(location)}>
            <RadRoutingComponent match={match} location={location}/>
        </div>)
}

export default RadPageComponent