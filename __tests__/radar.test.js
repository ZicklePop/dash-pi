import React from 'react'
import renderer from 'react-test-renderer'
import Radar from '../components/radar'

describe('component - Radar', () => {
  it('should render', () => {
    const component = renderer.create(<Radar />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render with props', () => {
    const component = renderer.create(<Radar className={'dn'} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
