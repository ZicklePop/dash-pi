import React, { Component } from 'react'
import Head from 'next/head'
import Clock from '../components/Clock'
import Gif from '../components/Gif'
import Radar from '../components/Radar'
import Text from '../components/Text'
import Weather from '../components/Weather'

const smallBox = 'fl f1 fw3 w-100 h-50 pa2 inline-flex items-center justify-center tc'
const bigBox = 'fl w-100 w-two-thirds-ns h-100 inline-flex items-center justify-center'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = { bigIndex: 0 }
  }

  handleContextMenu = (e) => {
    e.preventDefault()
    const currentBigIndex = this.state.bigIndex
    this.setState({
      bigIndex: currentBigIndex === 2 ? 0 : currentBigIndex + 1,
    })
  }

  render() {
    const { bigIndex } = this.state

    return (
      <div
        className={'ma0 center near-white'}
        style={{ width: 800, height: 480}}
        onContextMenu={this.handleContextMenu}
      >
        <Head>
          <title>{'JakeBoard Pi'}</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='stylesheet' href='/static/tachyons.min.css' />
          <style jsx>{`
            body {
              background-color: black;
              cursor: none;
            }
          `}</style>
        </Head>
        <div className={'fl w-100 w-third-ns h-100'}>
          <Clock className={smallBox} />
          <Weather className={smallBox} />
        </div>
        { bigIndex === 0 && <Gif className={bigBox} /> }
        { bigIndex === 1 && <Radar className={bigBox} /> }
        { bigIndex === 2 && <Text className={bigBox} /> }
      </div>
    )
  }
}
