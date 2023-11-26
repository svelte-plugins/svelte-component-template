<script>
  import { Component } from '@svelte-plugins/svelte-component-template';
  import Prism from 'svelte-prismjs';

  const handleClick = () => {
    console.log('clicked');
  }
</script>

<main>
	<section>
		<h1>@svelte-plugins/svelte-component-template <a href="https://github.com/dysfunc">(dysfunc)</a></h1>
		<p>A Svelte component template seed project.</p>
	</section>

  <hr />

  <section>
    <h2>Overview</h2>

    The <code>Component</code> is a user-friendly interactive element that provides the user with immediate feedback.

    <div class="showcase">
      <Component content="Hi!" />
    </div>
  </section>

  <section>
    <h3>Props</h3>

    <table class="table">
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>empty</td>
        <td><code>string</code></td>
        <td>The text to display in the default slot.</td>
        <td><code>Hello</code></td>
      </tr>
      <tr>
        <td>disabled</td>
        <td><code>boolean</code></td>
        <td>If true, the component will be rendered in a disabled state.</td>
        <td><code>false</code></td>
      </tr>
    </table>
  </section>

  <section>
    <h3>Events</h3>

    <table class="table">
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
      <tr>
        <td>on:click</td>
        <td><code>string</code></td>
        <td>The callback handler to bind to the <code>on:click</code> event.</td>
        <td>
          <code>
            {`<Component on:click={handleClick} />`}
          </code>
        </td>
      </tr>
    </table>
  </section>

  <section>
    <h2>Examples</h2>
    <p>Below are examples showcasing different features, states and renderings.</p>

    <h3>Normal</h3>

    <div class="example">
      <Component on:click={handleClick}>Hello There!</Component>

      <Prism showLineNumbers={true} code={`<Component>Hello There!</Component>`} />
    </div>

    <h3>Disabled</h3>

    <div class="example">
      <Component disabled>Disabled</Component>
      <Prism showLineNumbers={true} code={`<Component disabled>Disabled</Component>`} />
    </div>

    <h3>Empty</h3>

    <div class="example">
      <Component />
      <Prism showLineNumbers={true} code={`<Component />`} />
    </div>
  </section>
</main>

<style>
	main {
    color: #21333d;
		padding: 48px;
	}

  h1 {
    display: inline-block;
		margin: 0;
		padding: 0;
  }

	hr {
		border: 0;
		border-bottom: 1px solid #ddd;
		height: 1px;
	}

  code {
		background-color: #f0f0f0;
		border-radius: 3px;
		padding: 4px;
	}

  section {
    margin: 48px 0;
  }

  section:first-child {
    margin-bottom: 0;
    margin-top: 0;
  }

  section h1 {
    display: inline-block;
	}

  section h3 {
    color: #304e60;
	}

  .showcase {
    margin: 48px 0;
    position: relative;
  }

	.example {
    background-color: #fafafa;
    border-radius: 8px;
    padding: 16px 16px 10px;
		margin-bottom: 40px;
	}

  :global(.example > pre) {
    margin-top: 16px !important;
  }

  table {
    border-collapse: collapse;
    max-width: 1084px;
    width: 100%;
  }

  table tr th,
  table tr td {
    padding: 16px 24px;
    text-align: left;
  }

  table tr td:first-child {
    font-weight: 600;
  }

  table tr td code {
    font-size: 12px;
  }

  table tr th {
    background-color: #fafafa;
    border-bottom: 1px solid #e8e9ea;
    color: #21333d;
    font-size: 14px;
    font-weight: 600;
  }

  table tr td {
    border-bottom: 1px solid #eceff1;
    color: #454f5a;
    font-size: 14px;
  }
</style>
