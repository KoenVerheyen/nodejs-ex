// @flow
import type {Location} from 'react-router-dom'


export default function getBreadCrumb(location : Location) {


    let breadcrumb = [{title: 'Rad Home', link: '/rad'},
        {title: 'AIRAC amendments', link: '/rad/project'},
        {title: 'Restrictions', link: '/rad/rs'},
        {title: 'Aerodrome sets', link:'/rad/az'},
    ]

    return breadcrumb
}