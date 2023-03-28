import React, { Component } from 'react'
import axios from 'axios'

export default class index extends Component {
  state = {
    msg: ''
  }

  handleClick = (e) => {
    axios.get('/api/test').then(resp => {
      if(resp.status === 200){
        console.log(resp.data);
        this.setState({msg: resp.data})
      }
    })
  }
  render() {
    const { msg } = this.state
    return (
      <div>
        <div className='bg-green-500 rounded-full px-4 w-100 text-blue-500 hover:bg-green-600 cursor-pointer' onClick={this.handleClick}>测试按钮</div>
        <div>{msg}</div>
      </div>
    )
  }
}
