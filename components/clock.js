import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import dateAsObject from '../utils/dateAsObject'

const Clock = ({ className }) => {
  const [date, setDate] = useState(dateAsObject(new Date()))
  const { month, day, hours, minutes } = date

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(dateAsObject(new Date()))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={className}>
      {`${month} ${day}`}<br />
      {hours}:{minutes}
    </div>
  )
}

Clock.propTypes = {
  className: PropTypes.string
}

Clock.defaultProps = {
  className: ''
}

export default Clock
