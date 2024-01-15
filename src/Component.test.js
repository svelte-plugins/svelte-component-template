import { render } from '@testing-library/svelte';
import Component from './component.test.svelte';

describe('Component', () => {
  let TestHarness;

  beforeEach(() => {
    TestHarness = (props = {}) => render(Component, props);
  });

  it('should render the component', () => {
    const { container } = TestHarness();
    expect(container).toMatchSnapshot();
  });

  it('should render the correct content value', () => {
    const { component, container } = TestHarness({ content: 'Mahalo!' });
    expect(container.innerHTML).toMatch('Mahalo!');
    expect(component.content).toBe('Mahalo!');
    expect(container).toMatchSnapshot();
  });
});
