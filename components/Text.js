import React, { Component } from 'react'

const texts = [
  {
    style: {
      backgroundColor: '#00AEFF',
      color: '#FFFFFF',
      fontSize: '12rem'
    },
    text: 'BRB'
  },
  {
    style: {
      backgroundColor: '#FF002E',
      color: '#FFFFFF',
      fontSize: '12rem'
    },
    text: 'DND'
  }
]

export default class Text extends Component {
  constructor (props) {
    super(props)
    this.state = texts[Math.floor(Math.random() * texts.length)]
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState(texts[Math.floor(Math.random() * texts.length)])
  }

  render () {
    const { className } = this.props
    const { style, text } = this.state

    return (
      <div
        className={`${className} b tc f1`}
        style={style}
        onClick={this.handleClick}
      >
        {text}
      </div>
    )
  }
}
