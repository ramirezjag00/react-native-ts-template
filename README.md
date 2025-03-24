# React Native TS Template

## Requirements
  ```bash
    nvm install 22.14.0
    nvm alias default 22.14.0
    npm uninstall -g react-native-cli @react-native-community/cli
    npm i -g yarn
  ```

## Template Usage:

```sh
npx @react-native-community/cli@latest init <projectName> --template https://github.com/ramirezjag00/react-native-ts-template.git --pm yarn --package-name <com.projectName>
```
> [init.md](https://github.com/react-native-community/cli/blob/main/docs/init.md)
> 
> [commands.md](https://github.com/react-native-community/cli/blob/main/docs/commands.md) 

## Usage with older versions of React Native

### e.g. `react-native@0.76.x` add `#v0.8.0`

```sh
npx @react-native-community/cli@latest init  <projectName> --template https://github.com/ramirezjag00/react-native-ts-template.git#v0.8.0
```

See the below table to find out which version of the template to use.

#### React Native <=> Template Version

| React Native | Template |
| ------------ | -------- |
| 0.78         | v0.9.\*  |
| 0.76         | v0.8.\*  |
| 0.74         | v0.7.\*  |
| 0.72         | v0.6.\*  |
| 0.71         | v0.5.\*  |
| 0.70.6       | v0.4.\*  |
| 0.70         | v0.3.\*  |
| 0.69         | v0.2.\*  |
| 0.68         | v0.1.0  |

## Template Set up
- react v19
- react-native v0.78.1
- typescript v5.0.4
- node 18+ engine
- [new JSX transform (no need for React import)](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)
- Hermes and new architecture enabled by default
- Metro Config
  - experimentalImportSupport and inlineRequires enabled
- Android
  - minifyEnabled and shrinkResources enabled
    - proguard-rules.pro (WIP)
  - bundle compression disabled
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
