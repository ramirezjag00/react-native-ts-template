# React Native TS Template

## Requirements
  ```bash
    nvm install 18.17.0
    nvm alias default 18.17.0
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
| 0.72         | v0.6.\*  |
| 0.71         | v0.5.\*  |
| 0.70.6       | v0.4.\*  |
| 0.70         | v0.3.\*  |
| 0.69         | v0.2.\*  |
| 0.68         | v0.1.0  |

## Template Set up
- react v18.2.0
- react-native v0.72.4
- typescript v4.8.4
- node 18+ engine
- yarn 3.6.3 package manager
- [new JSX transform (no need for React import)](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)
- Hermes enabled for iOS and Android
  - recommended to use [Flipper](https://www.youtube.com/watch?v=7R8Gc8oTZVw) as default debugger
  - [Debugging JS on Hermes using Google Chrome's DevTools](https://reactnative.dev/docs/hermes/#debugging-js-on-hermes-using-google-chromes-devtools)
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
- [to enable new architecture](https://reactnative.dev/blog/2022/03/15/an-update-on-the-new-architecture-rollout#the-new-architecture-template)
