import React from 'react';
import { create } from 'react-test-renderer';
import Header from '../Header';

test('menu is active', () => {
  //mock matMedia API to fix the error of <Media targetWindow> does not support `matchMedia`.
  window.matchMedia = () => ({
    addListener: () => {},
    removeListener: () => {},
  });
  const component = create(<Header />);
  const instance = component.getInstance();
  expect(instance.state.active).toBe(false);
  instance.handleClick();
  expect(instance.state.active).toBe(true);
});
