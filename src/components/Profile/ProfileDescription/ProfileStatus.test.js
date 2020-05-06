import React from 'react'
import { create } from 'react-test-renderer';
import { ProfileStatus } from './ProfileStatus';

describe('ProfileStatus', () => {
  test('Input should be instead of h1', () => {
    const component = create(<ProfileStatus status={'Hakuna'} />);
    const root = component.root;
    expect(root.props.status).toBe('Hakuna');
  })
})