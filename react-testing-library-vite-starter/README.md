# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
# https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib
## 1
https://vitejs.dev/guide/#scaffolding-your-first-vite-project
```
npm create vite@latest . -- --template react-ts
```
## 2
https://vitest.dev/guide/#adding-vitest-to-your-project  
https://vitest.dev/guide/ui.html#vitest-ui  
https://github.com/veritem/eslint-plugin-vitest
https://github.com/jsx-eslint/eslint-plugin-react
```
npm install -D vitest @vitest/ui eslint-plugin-vitest eslint-plugin-react
```
## 3
https://testing-library.com/docs/dom-testing-library/setup
https://testing-library.com/docs/ecosystem-jest-dom
https://testing-library.com/docs/react-testing-library/setup
```
npm install -D jsdom @testing-library/jest-dom @testing-library/react
```
