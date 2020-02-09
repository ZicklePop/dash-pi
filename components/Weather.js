import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import get from 'lodash/get'

const WEATHER_API = '/api/weather'

const Weather = ({ className }) => {
  const [data, setData] = useState({})
  const temperature = get(data, 'temperature', 0)
  const precipProbability = get(data, 'precipProbability', 0)

  const fetchWeather = () => fetch(WEATHER_API)
    .then((res) => res.json())
    .then((json) => setData(json))

  useEffect(() => {
    fetchWeather()
    const interval = setInterval(() => {
      fetchWeather()
    }, 300000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={className}>
      {`${temperature}`.split('.')[0]}°F<br />
      {`${precipProbability * 100}`.split('.')[0]}%
    </div>
  )
}

Weather.propTypes = {
  className: PropTypes.string
}

Weather.defaultProps = {
  className: ''
}

export default Weather
