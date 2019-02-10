import React from 'react';
import { create } from 'react-test-renderer';
import { Event } from '../Timeline';

test('check position value', () => {
  const component = create(<Event position="left" />);
  const instance = component.getInstance();
  expect(instance.props.position).toEqual('left');
});
