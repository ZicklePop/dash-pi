import React, { Component } from 'react'
import dateAsObject from '../utils/dateAsObject'

export default class Clock extends Component {
  constructor (props) {
    super(props)
    this.state = { date: dateAsObject(new Date()) }
    this.interval = null
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      this.setState({ date: dateAsObject(new Date()) })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    const { className } = this.props
    const { month, day, hours, minutes } = this.state.date

    return (
      <div className={className}>
        {`${month} ${day}`}<br />
        {hours}:{minutes}
      </div>
    )
  }
}
