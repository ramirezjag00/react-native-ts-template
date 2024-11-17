# React Native TS Template

## Requirements
  ```bash
    nvm install 20.12.2
    nvm alias default 20.12.2
    npm i -g @react-native-community/cli yarn
  ```

## Template Usage:

```sh
npx react-native init appnamehere --template https://github.com/ramirezjag00/react-native-ts-template.git 
```

## Usage with older versions of React Native

### e.g. `react-native@0.68.x` add `#v0.1.0`

```sh
npx react-native init appnamehere --template https://github.com/ramirezjag00/react-native-ts-template.git#v0.1.0
```

See the below table to find out which version of the template to use.

#### React Native <=> Template Version

| React Native | Template |
| ------------ | -------- |
| 0.76         | v0.8.\*  |
| 0.74         | v0.7.\*  |
| 0.72         | v0.6.\*  |
| 0.71         | v0.5.\*  |
| 0.70.6       | v0.4.\*  |
| 0.70         | v0.3.\*  |
| 0.69         | v0.2.\*  |
| 0.68         | v0.1.0  |

## Template Set up
- react v18.3.1
- react-native v0.76.2
- typescript v5.0.4
- node 18+ engine
- yarn 3.6.4 package manager
- [new JSX transform (no need for React import)](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)
- Hermes and new architecture enabled by default
- dev tooling - make sure to read about the `rules in config files` of the following plugins/tools as you won't be able to `commit` if there's any error/warning in staged files
  - eslint
  - tslint
  - prettier
  - path alias (check babel.config.js/alias or tsconfig.json/paths)
  - husky
  - lint-staged
  - github
    - CODEOWNERS template
    - PR template
    - Issue template
    - actions for PRs
      - eslint checker
      - prettier checker
      - tsc checker
      - test checker
  - fastlane
    - bump versions (ios/android)
    - build android `debug` apk
    - notify and upload android apk to slack / telegram
    - github actions integration (optional)
    - interactive options (WIP)

### [React Native Blogs](https://reactnative.dev/blog/)

### Notes
- [Adopting the New Architecture](https://reactnative.dev/docs/new-architecture-intro)
