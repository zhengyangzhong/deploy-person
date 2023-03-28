import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'

export default class TodoList extends Component {
  render() {
    return (
      <div className='mx-auto max-w-lg p-4 border-solid border-4 border-blue-500 bg-purple-300'>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    )
  }
}
