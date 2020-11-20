# QuickOps

# RUN

1. Install yarn (without node)
2. Install Node.js (use nvm)
3. cd into this project's root directory
4. Run `yarn install` to install the app's dependencies
5. Run `yarn start` to start the app
6. Access the running app in a browser at <http://localhost:3000>

# Recommendations

## Package version

- node: v15.2.0
- yarn: 1.22.5
- npm: 7.0.8
- nvm: 0.37.0

## Editor VSCode

- Load local workspace in vscode

# Technology and used libs

- Typescript
- Redux saga
- React router dom
- React library test
- React Ant Design
- React hooks
- Native Fetch api
- Lint
  - EsLint
  - Prettier
  - Editor Config

# Tests

```sh (mac or linux)
# run for dev
yarn test
# run and exit
CI=true npm test
# generate code coverage for local analyses
CI=true yarn test --coverage
google-chrome coverage/lcov-report/index.html
```

# Build

```
yarn build
```

For the most efficient production build

- [optimizing-performance](https://reactjs.org/docs/optimizing-performance.html)
  - Brunch
  - Browserify
  - Rollup

# Docker run

```
cd ./deploy
docker-compose up
```

# TODO

- Use next js
- use styled components
- use themes
