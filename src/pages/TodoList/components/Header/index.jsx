import React, { Component } from 'react'
import { Input } from 'antd';

export default class Header extends Component {
  render() {
    return (
      <div className="mb-4">
        <Input placeholder="please input!!!" />
      </div>
    )
  }
}
