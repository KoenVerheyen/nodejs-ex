// @flow
import React from 'react'
import {Panel} from "nes-core-frontend/lib/components/core/Panel";
import {Select, Button} from 'antd'
import IdentityFormSelect from "./IdentityFormSelect";

const Option = Select.Option
const PERSON = 'person'
const FUNCTION = 'function'
const PROFILE = 'profile'
const ID = 'id'
const LABEL_LENGTH = 100

function filterByChildPropId(array, prop, value = undefined) {
    if (value) {
        return array.filter((elem) => elem[prop][ID] === value)
    }
    return array.slice() // a copy of the array
}

function filterUniqueById(array) {
    let flags = {}
    return array.filter(function (entry) {
        if (flags[entry[ID]]) {
            return false
        }
        flags[entry[ID]] = true
        return true
    })
}

function reduceByProp(array, prop) {
    return array.reduce(function (prev, curr) {
        return [...prev, curr[prop]]
    }, [])
}

type Props = {
    +token: string,
    +identities: Array<Object>,
    +loading: boolean,
    +onSelectToken: Function,
    +postSelectIdentity: Function,
}
type Identity = {
    person: number,
    function?: number,
    profile?: number,
}
type State = {
    identity: Identity
}


export default class DevLoginPageComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            identity: {
                person: 0,
            }
        }
    }

    componentWillReceiveProps(nextProps : Props) {
        if (nextProps.identities.length > 0 && !nextProps.loading) {
            this.setState({
                identity: {
                    person : Number(nextProps.identities[0].person.id),
                    function: nextProps.identities[0].function.id,
                    profile: nextProps.identities[0].profile.id,
                }

            })
        }
    }

    onPersonChange(value : string) {
        const firstIdentity = filterByChildPropId(this.props.identities, PERSON, Number(value))[0]
        this.setState({
            identity: {
                person: Number(value),
                function: firstIdentity.function.id,
                profile: firstIdentity.profile.id
            }
        })
    }

    onFunctionChange(value : string) {
        const firstIdentity = filterByChildPropId(this.props.identities, FUNCTION, Number(value))[0]
        this.setState({
            identity: {
                person: firstIdentity.person.id,
                function: Number(value),
                profile: firstIdentity.profile.id
            }
        })
    }

    onProfileChange(value: string) {
        let identity = {
            ...this.state.identity,
            profile: Number(value),
        }
        this.setState({identity})
    }

    onSubmitIdentity() {
        this.props.postSelectIdentity(this.props.token, this.state.identity)
    }

    getPersons() {
        const identities = this.props.identities.slice()
        return filterUniqueById(reduceByProp(identities, PERSON))
    }

    getFunctions() {
        const identities = this.props.identities.slice()
        const id = this.state.identity.person || undefined
        return filterUniqueById(reduceByProp(filterByChildPropId(identities, PERSON, id), FUNCTION))
    }

    getProfiles() {
        const identities = this.props.identities.slice()
        const id = this.state.identity.function || undefined
        return filterUniqueById(reduceByProp(filterByChildPropId(identities, FUNCTION, id), PROFILE))
    }


    render() {
        return (<Panel style={{ display: 'block'}}>
            <div style={{ display: 'flex'}}>
            <div style={{width: LABEL_LENGTH}}>{'Token: '}</div>
            <Select value={this.props.token} onChange={this.props.onSelectToken} style={{width: 200}}>
                <Option value='lrc'>Local Rad Coordinator</Option>
                <Option value='nrc'>National Rad Coordinator</Option>
                <Option value='rad'>Rad Team</Option>
            </Select></div>
            {this.props.identities.length > 0 ? (<div style={{ display: 'flex'}}>
                <div style={{width: LABEL_LENGTH}}>Person: </div>
                <IdentityFormSelect
                    name={PERSON}
                    value={this.state.identity.person}
                    onSelectChange={this.onPersonChange.bind(this)}
                    elements={this.getPersons()}
                    getName={(elem) => elem.firstName && elem.lastName ? elem.firstName + ' ' + elem.lastName : 'Unknown' }
                    style={{width: 200}}
                /></div>):undefined}
                {this.props.identities.length > 0 ? (<div style={{ display: 'flex'}}>
                <div style={{width: LABEL_LENGTH}}>Function: </div>
                <IdentityFormSelect
                    name={FUNCTION}
                    value={this.state.identity.function}
                    onSelectChange={this.onFunctionChange.bind(this)}
                    elements={this.getFunctions()}
                    getName={(elem) => elem.name? elem.name: 'unknown'}
                    style={{width: 200}}
                /></div>): undefined}
            {this.props.identities.length > 0 ? (<div style={{ display: 'flex'}}>
                <div style={{width: LABEL_LENGTH}}>Profile: </div>
                <IdentityFormSelect
                    name={PROFILE}
                    value={this.state.identity.profile}
                    onSelectChange={this.onProfileChange.bind(this)}
                    elements={this.getProfiles()}
                    getName={(elem) => elem.name ? elem.name: 'unknown'}
                    style={{width: 200}}
                />
            </div>) : undefined}
            {this.props.identities.length > 0 ? (<div style={{ display: 'flex'}}>
                <Button onClick={this.onSubmitIdentity.bind(this)} loading={this.props.loading}>Login</Button>
            </div>) : undefined}

        </Panel>)
    }
}
