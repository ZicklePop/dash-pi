import React, { Component } from 'react'
import 'isomorphic-fetch'

const WEATHER_API = '/api/weather'

export default class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: 0,
      precipProbability: 0,
    }
  }

  componentDidMount() {
    this.fetchWeather()

    this.interval = setInterval(() => {
      this.fetchWeather()
    }, 300000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  interval = null

  fetchWeather() {
    fetch(WEATHER_API)
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        this.setState({ ...json })
      })
  }

  render() {
    const { className } = this.props
    const { temperature, precipProbability } = this.state

    return (
      <div className={className}>
        {`${temperature}`.split('.')[0]}°F<br/>
        {`${precipProbability * 100}`.split('.')[0]}%
      </div>
    )
  }
}
