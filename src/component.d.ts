import type { SvelteComponent } from 'svelte';

export interface ComponentProps {
 /**
   * The text to display in the component.
   * @default 'Empty'
   */
  placeholder?: string;

  /**
   * Whether the component is disabled.
   * @default false
   */
  disabled?: boolean;
}

export interface ComponentEvents {
  [key: string]: any;
}

export interface ComponentSlots {
  default?: {};
}

export default class Component extends SvelteComponent<ComponentProps, ComponentEvents, ComponentSlots> {}
