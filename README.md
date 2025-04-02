# REGenKit

## Requirements
  ```bash
    nvm install 22.14.0
    nvm alias default 22.14.0
    npm uninstall -g react-native-cli @react-native-community/cli
    npm i -g yarn
  ```

## Template Usage:

```sh
RN_TEMPLATE=<templateName> npx @react-native-community/cli@latest init <projectname> --template https://github.com/ramirezjag00/regenkit.git --pm yarn
```
#### Available Templates
- `rnbare` - React Native Bare Workflow template
- `expobare` - Expo Bare Workflow template

<details>
  <summary>Usage with <= v0.9.7 of <b><i>rnbare</i></b> template</summary>
  
  ### e.g. `react-native@0.78.1` add `#v0.9.7`

```sh
npx @react-native-community/cli@latest init <projectname> --template https://github.com/ramirezjag00/regenkit.git#v0.9.7
```

See the below table to find out which version of the template to use.

#### React Native <=> Template Version

| React Native | Template |
| ------------ | -------- |
| 0.78         | <= v0.9.7  |
| 0.76         | v0.8.\*  |
| 0.74         | v0.7.\*  |
| 0.72         | v0.6.\*  |
| 0.71         | v0.5.\*  |
| 0.70.6       | v0.4.\*  |
| 0.70         | v0.3.\*  |
| 0.69         | v0.2.\*  |
| 0.68         | v0.1.0  |
</details>

## Template Set up
| Template  	| Version 	| React Native 	| React 	| TypeScript 	| Expo SDK  	|
|-----------	|---------	|--------------	|-------	|------------	|-----------	|
| RN Bare   	| >= 0.9.8 	| 0.78.2       	| 19    	| 5.0.4      	| -         	|
| Expo Bare 	| >= 0.9.8 	| 0.79.0-rc.0  	| 19    	| 5.3.3      	| 53 canary 	|

- RN
  - Hermes and new architecture enabled by default
  - react-compiler enabled
  - node 18+ engine
  - [new JSX transform (no need for React import)](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)
- Metro Config
  - [experimentalImportSupport and inlineRequires](https://github.com/facebook/react-native/pull/49449#issuecomment-2660984922) enabled
- iOS
  - [automaticPodsInstallation](https://github.com/react-native-community/cli/blob/main/docs/projects.md#projectiosautomaticpodsinstallation) enabled
- Android
  - [minifyEnabled and shrinkResources](https://docs.expo.dev/versions/latest/sdk/build-properties/#pluginconfigtypeandroid) enabled
    - proguard-rules.pro (WIP)
  - [bundle compression](https://github.com/facebook/react-native/pull/49449#issuecomment-2660984922) disabled
- dev tooling - make sure to read about the `rules in config files` of the following plugins/tools as you won't be able to `commit` if there's any error/warning in staged files
  - eslint
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

### [React Native Blog](https://reactnative.dev/blog/)
### [Expo Blog](https://expo.dev/blog)
### [Expo Changelog](https://expo.dev/changelog)
