import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import get from 'lodash/get'

const GIF_API = '/api/gif'
const DEFAULT_GIF = 'https://myhot.pics/random.gif'

const Gif = ({ className }) => {
  const [url, setUrl] = useState(DEFAULT_GIF)

  const fetchGif = () => fetch(GIF_API)
    .then((res) => res.json())
    .then((json) => setUrl(get(json, 'url', DEFAULT_GIF)))

  useEffect(() => {
    const interval = setInterval(() => {
      fetchGif()
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`${className} cover bg-center`}
      style={{
        backgroundImage: `url(${url})`
      }}
    />
  )
}

Gif.propTypes = {
  className: PropTypes.string
}

Gif.defaultProps = {
  className: ''
}

export default Gif
