
# Vue 3 Project with Vite

This project is a starter template for building Vue 3 applications using [Vite](https://vitejs.dev/). It includes TypeScript support, unit testing with [Vitest](https://vitest.dev/), and linting with [ESLint](https://eslint.org/).

## Recommended IDE Setup

We recommend using [Visual Studio Code (VSCode)](https://code.visualstudio.com/) with the following extensions for a smoother development experience:

- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - for Vue 3 support (disable [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)).
- [TypeScript Vue Plugin (Volar)](https://github.com/johnsoncodehk/volar#typescript-plugin) - makes the TypeScript language service aware of `.vue` files.

## Type Support for `.vue` Imports in TypeScript

By default, TypeScript cannot handle type information for `.vue` files. This project uses `vue-tsc` instead of `tsc` for better type-checking and improved TypeScript integration in `.vue` files. The [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension in your editor will also ensure correct TypeScript support within `.vue` files.

## Project Setup

### Install Dependencies

```bash
npm install
```

### Start Development Server with Hot-Reload

```bash
npm run dev
```

This command will start a local development server with hot-reloading enabled. You can access your app at `http://localhost:3000`.

### Type-Check, Build, and Minify for Production

```bash
npm run build
```

This will type-check your code, compile the application for production, and minify the resulting files. The compiled files will be located in the `dist/` folder.

### Run Unit Tests

You can run unit tests using [Vitest](https://vitest.dev/):

```bash
npm run test:unit
```

Vitest is a fast unit testing framework for Vue 3 applications. Unit tests are typically located in the `tests/` folder.

### Lint with ESLint

To lint your project files using [ESLint](https://eslint.org/), run:

```bash
npm run lint
```

ESLint will analyze your code for potential issues, ensuring code quality and consistency across the project.

## Customize Configuration

To customize the project configuration, refer to the [Vite Configuration Reference](https://vitejs.dev/config/) and [Vue.js Documentation](https://vuejs.org/guide/).

## Project Structure

Here's a quick overview of the project's folder structure:

```bash
├── src/                # Source files
│   ├── assets/         # Static assets
│   ├── components/     # Vue components
│   ├── views/          # Vue views (pages)
│   ├── App.vue         # Root component
│   └── main.ts         # Entry point of the application
├── tests/              # Unit tests
├── public/             # Public assets (index.html)
├── dist/               # Production build files
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # NPM scripts and dependencies
└── README.md           # Project documentation
```

## Contributing

Contributions are welcome! If you'd like to contribute to the project, feel free to open an issue or submit a pull request.
