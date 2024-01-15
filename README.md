# @svelte-plugins/svelte-component-template

A Svelte seed project for creating components.

## TLDR;

```vim
> npm i

> npx husky install

> chmod +x .husky/post-merge && chmod +x .husky/pre-commit && cp .husky/post-merge .git/hooks

> npm start
```

## Setting up development environment

1. Install dependencies

   ```vim
   > npm i
   ```

2. Install `husky` hooks

   ```vim
   > npx husky install
   ```

3. Make sure husky scripts are executable and copied to .git/hooks

   ```vim
   > chmod +x .husky/post-merge && chmod +x .husky/pre-commit && cp .husky/post-merge .git/hooks
   ```

4. Start the component dev server and the document server

    ```vim
    > npm start
    ```

5. Happy coding! You're changes will be automatically rebuilt and reflected immediately on the docs.

## Testing

Running either of these commands will execute all unit tests.

| Command                          | Notes                                                |
| -------------------------------- | ---------------------------------------------------- |
| `npm test`                       | Single run with no coverage report                   |
| `npm test:watch`                 | Watches for changes                                  |
| `npm test:coverage`              | Executes tests and launches a coverage report        |

Run all tests
```vim
> npm test
```

Run a specific test
```vim
> npm test [path-to-test-file]
```

Run all tests and generate a code coverage report
```vim
> npm test:coverage
```

## Documentation

**Building**
Run the `build:docs` command to generate a dist bundle for GitHub pages.

```vim
> npm run build:docs
```

**Deploying**
Run the `deploy:docs` command to automaically build the docs source and push it to `gh-pages`.

```vim
> npm run deploy:docs
```

## Publishing Package

You can publish your package via `NPM`:

1. Adjust the major, minor or patch version in the `version` property of your `package.json`.
2. [Login](https://www.npmjs.com/login) or [create](https://www.npmjs.com/signup) an `NPM` account.
3. Run `npm run publish`

If you are looking for a private publish or other types, follow the guide [here](https://gist.github.com/coolaj86/1318304).

## Stack
### Framework
- [Svelte](https://svelte.dev/) - Blazing fast frontend framework that enhances HTML, CSS & JS

### Testing
- [Vitest](https://vitest.dev/) - Next Generation Testing Framework

### CI/CD
- [GitHub Actions](https://docs.github.com/en/actions) - Automate, customize, and execute workflows in your repository with GitHub Actions.

### Development
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Babel](https://babeljs.io/) - JavaScript compiler that allows next generation JS, today
- [Prettier](https://prettier.io/) - An opinionated code formatter
- [Publint](publint.dev) - Lint packaging errors. Ensure compatibility across environments.
- [ESLint](https://eslint.org/) - A static code analysis tool for finding issues in your code
- [Husky](https://typicode.github.io/husky/) - Hooks for running linting, formatting, etc when you push or commit
- [Lint-staged](https://github.com/lint-staged/lint-staged) - Run linters on git staged files

### Publishing
- [NPM](https://npmjs.com) - Run linters on git staged files
- [Svelte Package](https://github.com/sveltejs/kit/tree/main/packages/package) - The fastest way to build Svelte packages

## Changelog

[Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)
