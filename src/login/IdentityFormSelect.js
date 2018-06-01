// @flow
import React from "react";
import {Select} from "antd";

const Option = Select.Option

export type Element = {
    id: string,
    name? : string,
    firstName? : string,
    lastName? : string,
}

type Props = {
    name: string,
    value?: string | number,
    onSelectChange: (value: string) => void,
    elements: Array<Element>,
    getName: (elem: Element) => string,
    style: Object,
}

class IdentityFormSelect extends React.Component<Props> {


  render() {
    return (
      <Select name={this.props.name}
              value={this.props.value ? this.props.value : ''}
              onChange={this.props.onSelectChange}
              style={this.props.style}>
        {this.props.elements.map((elem) => {
          return (
            <Option key={elem.id} value={elem.id}>{this.props.getName(elem)}</Option>
          )
        })}
      </Select>
    )
  }
}

export default IdentityFormSelect