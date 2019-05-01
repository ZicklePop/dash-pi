import { Component } from 'react'

export default class HardRefresh extends Component {
  constructor (props) {
    super(props)
    this.interval = null
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      this.reloadPage()
    }, 10800000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  reloadPage () {
    window.location = '/'
  }

  render () {
    return null
  }
}
