import { render } from '@testing-library/svelte';
import { Component } from './index';

describe('Component', () => {
  let TestHarness;

  beforeEach(() => {
    TestHarness = (props = {}) => render(Component, props);
  });

  it('should render the component', () => {
    const { container } = TestHarness({ text: 'Hello World' });
    expect(container).toMatchSnapshot();
  });

  it('should render the correct text value', () => {
    const { component, container } = TestHarness({ text: 'Mahalo!' });
    expect(container.innerHTML).toMatch('Mahalo!');
    expect(component.text).toBe('Mahalo!');
  });
});
