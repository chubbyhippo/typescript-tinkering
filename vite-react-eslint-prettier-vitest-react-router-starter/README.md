# 1. vite and eslint
```
npm create vite@latest my-react-app -- --template react-ts
```
# 2. prettier
```
cd my-react-app
```
```
npm install -D prettier eslint-config-prettier 
```
## configure prettier
https://prettier.io/docs/en/configuration  
https://prettier.io/docs/en/integrating-with-linters
## to make sure the project is formatted
```
prettier --check .
```
# 3. vitest
```
npm install -D vitest @vitest/browser playwright vitest-browser-react 
```
https://vitest.dev/guide/browser/  
https://github.com/vitest-tests/browser-examples/tree/main/examples/react
