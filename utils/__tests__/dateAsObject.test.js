import dateAsObject from '../dateAsObject'

const mockDateEpoc = new Date('Jan 19 1990')
const mockDateObj = {
  day: 19,
  hours: 12,
  minutes: '00',
  month: 'Jan',
}

describe('dateAsObject util', () => {
  it('returns null when no date passed in', () => {
    expect(dateAsObject()).toBeNull()
  })

  it('should return parsed object', () => {
    expect(dateAsObject(mockDateEpoc)).toEqual(mockDateObj)
  })
})
