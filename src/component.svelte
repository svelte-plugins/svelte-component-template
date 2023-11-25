<script>
  export let content = 'Hello!';
  export let disabled = false;
</script>

<button class="component" {disabled} {...$$restProps}>
  {content}
</button>

<style>
  :root {
    --component-background: #fff;
    --component-background-active: #ddd;
    --component-background-disabled: #ccc;
    --component-background-hover: #eaeaea;

    --component-border: 1px solid #eee;
    --component-border-active: 1px solid #aaa;
    --component-border-active: 1px solid #bbb;
    --component-border-hover: 1px solid #ccc;
    --component-border-radius: 4px;

    --component-color: #111;
    --component-color-active: #333;
    --component-color-disabled: #999;
    --component-color-hover: #777;

    --component-cursor: pointer;
    --component-cursor-disabled: default;

    --component-display: inline-block;
    --component-padding: 12px 16px;
  }

  .component {
    appearance: none;
    background: var(--component-background);
    border: var(--component-border);
    border-radius: var(--component-border-radius);
    color: var(--component-color);
    cursor: var(--component-cursor);
    display: var(--component-display);
    padding: var(--component-padding);
  }

  .component:hover {
    background: var(--component-background-hover);
    border: var(--component-border-hover);
    color: var(--component-color-hover);
  }

  .component:active {
    background: var(--component-background-active);
    border: var(--component-border-active);
    color: var(--component-color-active);
  }

  .component[disabled] {
    background: var(--component-background-disabled);
    border: var(--component-border-disabled);
    color: var(--component-color-disabled);
    cursor: var(--component-cursor-disabled);
  }
</style>
