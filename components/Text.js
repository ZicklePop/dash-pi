import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TEXTS = [
  {
    style: {
      backgroundColor: '#00AEFF',
      color: '#FFFFFF',
      fontSize: '12rem'
    },
    text: 'BRB'
  },
  {
    style: {
      backgroundColor: '#FF002E',
      color: '#FFFFFF',
      fontSize: '12rem'
    },
    text: 'DND'
  }
]

const Text = ({ className }) => {
  const [ index, setIndex ] = useState(0)
  const { text, style } = TEXTS[index]

  const handleClick = () => (
    setIndex(index === TEXTS.length-1 ? 0 : index + 1)
  )

  return (
    <div
      className={`${className} b tc f1`}
      style={style}
      onClick={handleClick}
    >
      {text}
    </div>
  )
}

Text.propTypes = {
  className: PropTypes.string
}

Text.defaultProps = {
  className: ''
}

export default Text
