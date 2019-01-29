import React from 'react';
import { create } from 'react-test-renderer';
import Footer from '../Footer';

test('snapshot', () => {
  const component = create(<Footer />);
  expect(component.toJSON()).toMatchSnapshot();
});
