const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

export default function dateAsObject (date) {
  if (!date) return null

  let hours = date.getHours() % 12
  hours = hours || 12

  return {
    day: date.getDate(),
    hours,
    minutes: ('0' + date.getMinutes()).slice(-2),
    month: MONTHS[date.getMonth()]
  }
}
