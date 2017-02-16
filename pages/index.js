import React, { Component } from 'react'
import Head from 'next/head'
import Clock from '../components/Clock'
import Weather from '../components/Weather'
import Gif from '../components/Gif'

const smallBox = 'fl f1 fw3 w-100 h-50 pa2 inline-flex items-center justify-center tc'
const bigBox = 'fl f2 fw3 w-100 w-two-thirds-ns pa2 h-100 inline-flex items-center justify-center'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={'ma0 center near-white'} style={{ width: 800, height: 480}}>
        <Head>
          <title>{'JakeBoard Pi'}</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='stylesheet' href='/static/tachyons.min.css' />
          <style jsx>{`
            body { background-color: black; }
          `}</style>
        </Head>
        <div className={'fl w-100 w-third-ns h-100'}>
          <Clock className={smallBox} />
          <Weather className={smallBox} />
        </div>
        <Gif className={bigBox} />
      </div>
    )
  }
}
