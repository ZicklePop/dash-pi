import React from 'react'
import renderer from 'react-test-renderer'
import Text from '../components/text'

describe('component - Text', () => {
  it('should render', () => {
    const component = renderer.create(<Text />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render with props', () => {
    const component = renderer.create(<Text className={'dn'} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
