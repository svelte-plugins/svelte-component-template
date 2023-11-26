<script>
  /**
   * At the time of creating this repository, testing-library doesn't provide a direct method
   * for passing slot components. To address this limitation, we employ a workaround by creating
   * a wrapper component that conveys the slot content through props.
   *
   * If your components don't utilize `<slot>`, you can directly import them into the component.test.js file.
   */
  import Component from './component.svelte';
  /**
   * The slot content.
   *
   * @type {any}
   * @default ''
   */
  export let content = '';
</script>

{#if content}
  <Component {...$$restProps}>
    <slot>{@html content}</slot>
  </Component>
{:else}
  <Component {...$$restProps} />
{/if}
