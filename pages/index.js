import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Clock from '../components/clock'
import Gif from '../components/gif'
import Radar from '../components/radar'
import Text from '../components/text'
import Weather from '../components/weather'

const cx = {
  main: 'ma0 center bg-black near-white sans-serif',
  smallBox: 'fl f1 fw3 w-100 h-50 pa2 inline-flex items-center justify-center tc',
  smallContainer: 'fl w-100 w-third-ns h-100',
  bigBox: 'fl w-100 w-two-thirds-ns h-100 inline-flex items-center justify-center'
}

const s = {
  main: { width: 800, height: 480 }
}

const Index = () => {
  const [index, setIndex] = useState(0)

  const boxes = [
    <Gif key='box-gif' className={cx.bigBox} />,
    <Radar key='box-radar' className={cx.bigBox} />,
    <Text key='box-text' className={cx.bigBox} />
  ]

  const handleContextMenu = e => {
    e.preventDefault()
    setIndex(index === boxes.length - 1 ? 0 : index + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      window.location = '/'
    }, 10800000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={cx.main}
      style={s.main}
      onContextMenu={handleContextMenu}
    >
      <Head lang='en'>
        <title>MelBoard Pi</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className={cx.smallContainer}>
        <Clock className={cx.smallBox} />
        <Weather className={cx.smallBox} />
      </div>
      {boxes[index]}
      <style global jsx>{`
          body {
            background-color: black;
            cursor: none;
            user-select: none;
          }
        `}
      </style>
    </div>
  )
}

export default Index
