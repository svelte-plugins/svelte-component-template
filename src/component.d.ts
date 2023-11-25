import type { SvelteComponent } from 'svelte';

export interface ComponentProps {
 /**
   * The text to display in the component.
   * @default 'Hello!'
   */
  text: string;
}

export default class Component extends SvelteComponent<
  ComponentProps,
  Record<string, any>,
  { default: {} }
> {}
