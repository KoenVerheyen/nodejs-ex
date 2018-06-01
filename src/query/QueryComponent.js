// @flow
import React from 'react'
import { Checkbox, TreeSelect, Input, Tag, Icon, Button, DatePicker, Table, Tooltip } from 'antd'

import '../Rad.css'
import '../RadIcons.css'

const TreeNode = TreeSelect.TreeNode;
const columns = [
    {
        title:"Saved queries",
        dataIndex:"query",
        className: "saved-query-item"
    },
    {
        title:<span className="icon-save-floppy"/>,
        render: () => <span><span>Run</span>-<span>Rename</span>-<span>Delete</span></span>
    }
]
const dataSource = [
    {
        key: "1",
        query: "Belgian DCT_CB"
    },
    {
        key: "2",
        query: "Aerodrome set EB*"
    },
    {
        key: "3",
        query: "Restriction DEPS EDDF"
    }
]
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {}
}



const columnsAppendixResult = [
    {
        title:"Appendix",
        dataIndex:"appendix",
        className: "appendix-item"
    }
]
const dataSourceAppendixResult = [
    {
        key: "1",
        appendix: "Annex PAN (PAN-European restrictions)"
    },
    {
        key: "2",
        appendix: "Appendix 2 (Aerodrome sets)"
    },
    {
        key: "3",
        appendix: "Appendix 3"
    }
]


const expandedRowRender = () => {

    const columnsResult = [
        {
            title:"ID",
            dataIndex:"id",
            className: "result-id"
        },
        {
            title:"Owner",
            dataIndex:"owner",
            className: "result-owner"
        },
        {
            title:"Type",
            dataIndex:"type",
            className: "result-type"
        },
        {
            title:"Amendment ID",
            dataIndex:"amendmentId",
            className: "result-amendment-id"
        },
        {
            title:"Definition",
            dataIndex:"definition",
            render: (text, record, index) =>
                <Tooltip placement="bottom"
                         title={ () =>
                             <span>
                                 dep BRUSSELS_GROUP
                                 arr MONTPELLIER_GROUP, PROVENCE_GROUP, PYRENEES_GROUP, TOULOUSE_GROUP
                                 not-above FL285
                             </span> }
                >
                    {text} 
                </Tooltip>
        }
    ]
    const dataSourceResult = [
        {
            key: "1",
            id: "GENEVA_AREA",
            owner: "ED",
            type:"AREA",
            amendmentId:"AURA009",
            definition:"LSEA, LSEC, LSEG ..."
        },
        {
            key: "2",
            id: "SAINT_YAN_GROUP",
            owner: "LF",
            type:"GROUP",
            amendmentId:"AURA010",
            definition:"LFGM, LFGN, LFHY, LFLN ..."
        },
        {
            key: "3",
            id: "PADOVA_GROUP",
            owner: "LI",
            type:"GROUP",
            amendmentId:"AURA011",
            definition:"LFGM, LFGN, LFHY, LFLN ..."
        },
        {
            key: "4",
            id: "BERLIN_YZ_GROUP",
            owner: "ED",
            type:"YZ_GROUP",
            amendmentId:"AURA012",
            definition:"LFGM, LFGN, LFHY, LFLN ..."
        },
    ]

    const rowSelectionResult = {
        onChange: (selectedRowKeys, selectedRows) => {}
    }

    return(
        <Table  columns={columnsResult}
                dataSource={dataSourceResult}
                rowSelection={rowSelection}
                pagination={false}
        />
    )

}

export default function QueryComponent() {
    return (
        <div>
            <div title="Restriction querying" width="600px" itemId="Query">
                <div className="restriction-query-panel">
                    <div className="panel-info">
                        <div className="panel-image">
                            <div className="image-search"/>
                        </div>
                    </div>
                    <div className="query-panel">
                        <div className="label-field">
                            <div className="label">Object type:</div>
                            <div className="field">
                                <Checkbox defaultChecked={true}>
                                    Restriction
                                </Checkbox>
                                <Checkbox>
                                    Aerodrome set
                                </Checkbox>
                            </div>
                        </div>
                        <div className="label-field">
                            <div className="label">Restriction type:</div>
                            <div className="field">
                                <TreeSelect
                                    showSearch
                                    style={{ width: "100%" }}
                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                    placeholder="Please select"
                                    allowClear
                                    multiple
                                    treeDefaultExpandAll
                                >
                                    <TreeNode value="parent 1" title="parent 1" key="0-1">
                                        <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                                            <TreeNode value="leaf1" title="my leaf" key="random" />
                                            <TreeNode value="leaf2" title="your leaf" key="random1" />
                                        </TreeNode>
                                        <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                                            <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
                                        </TreeNode>
                                    </TreeNode>
                                </TreeSelect>
                            </div>
                        </div>
                        <div className="label-field">
                            <div className="label">Amendment ID:</div>
                            <div className="field">
                                <Input addonBefore="AURA" defaultValue="mysite" />
                            </div>
                        </div>
                        <div className="label-field">
                            <div className="label">Any text:</div>
                            <div className="field">
                                <Input />
                            </div>
                        </div>
                        <div className="label-field">
                            <div className="label">Effective date:</div>
                            <div className="field">
                                <span className="ant-input-group">
                                <span className="ant-input-group-addon">1807</span>
                                <DatePicker/>
                                </span>
                            </div>
                        </div>
                        <div className="label-field">
                            <div className="label"/>
                            <div className="field">
                                <Checkbox>
                                    Include under work
                                </Checkbox>
                            </div>
                        </div>
                        <div className="label-field">
                            <div className="label"/>
                            <div className="field">
                                <Checkbox>
                                    Include published
                                </Checkbox>
                            </div>
                        </div>
                        <div className="label-field">
                            <div className="label">CACD entities:</div>
                            <div className="field">
                                <Tag closable={true}>EBFN</Tag>
                                <Tag closable={true}>EBBR</Tag>
                                <Tag
                                    id='new-pattern-tag'
                                    className="new"
                                >
                                    <Icon type="plus" /> Add entity
                                </Tag>
                            </div>
                        </div>
                        <div className="label-field">
                            <div className="label"/>
                            <div className="field">
                                <Button type="primary">Query</Button>
                            </div>
                        </div>
                    </div>
                    <div className="saved-queries-panel">
                        <Table columns={columns}
                               dataSource={dataSource}
                               rowSelection={rowSelection}
                                pagination={false}/>
                    </div>
                </div>
            </div>
            <div title="Results of query" width="600px" itemId="Result">
                <div className="restriction-result-panel">
                    <div className="panel-info">
                        <div className="panel-image">
                            <div className="image-result"/>
                        </div>
                        <div className="panel-info-header">Results of query</div>
                        <div className="panel-info-row">
                            <span className="parameter-name">Object type</span>
                            <span className="parameter-value">Restriction</span>
                            <span className="separator">&ndash;</span>
                            <span className="parameter-name">Restriction type</span>
                            <span className="parameter-value">DCT_CB</span>
                            <span className="separator">&ndash;</span>
                            <span className="parameter-name">Effective date</span>
                            <span className="parameter-value">1807</span>
                            <span className="separator">&ndash;</span>
                            <span className="parameter-name">CACD entities</span>
                            <span className="parameter-value">EBFN</span>
                            <span className="separator">,</span>
                            <span className="parameter-value">EBBR</span>
                        </div>
                    </div>
                    <div className="result-table">
                        <Table  columns={columnsAppendixResult}
                                dataSource={dataSourceAppendixResult}
                                expandedRowRender={expandedRowRender}
                                pagination={false}/>
                    </div>
                </div>
            </div>
        </div>
    )
}