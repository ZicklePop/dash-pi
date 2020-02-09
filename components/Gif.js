import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'

const GIF_API = '/api/gif'

export default class Gif extends Component {
  constructor (props) {
    super(props)
    this.state = {
      url: 'https://myhot.pics/random.gif',
      keywords: ''
    }
    this.interval = null
  }

  componentDidMount () {
    this.fetchGif()

    this.interval = setInterval(() => {
      this.fetchGif()
    }, 60000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  fetchGif () {
    fetch(GIF_API)
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        this.setState({ ...json })
      })
  }

  render () {
    const { className } = this.props
    const { url } = this.state

    return (
      <div
        className={className}
        style={{
          backgroundPosition: '50% 50%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundImage: `url(${url})`
        }}
      />
    )
  }
}
