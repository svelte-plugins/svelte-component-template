import type { SvelteComponent } from 'svelte';

export interface ComponentProps {
 /**
   * The text to display in the component.
   * @default 'Hello!'
   */
  content: string;

  /**
   * Whether the component is disabled.
   * @default false
   */
  disabled: boolean;
}

export default class Component extends SvelteComponent<
  ComponentProps,
  Record<string, any>,
  { default: {} }
> {}
