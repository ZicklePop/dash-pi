import React, { Component } from 'react'

export default class HardRefresh extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.reloadPage()
    }, 10800000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  interval = null

  reloadPage() {
    window.location = '/'
  }

  render() {
    return null
  }
}
