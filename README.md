# React Native TS Template

## Requirements
- Recommended to install/use `nvm` and version of `node >= v16.0.0` when running the app
  ```bash
    nvm install 16.0.0 # to install v16 node, comes with npm v7.10.0
    nvm ls # to list out all available/installed versions of node (and see what's currently in use / default)
    nvm alias default v16.0.0 # to use node version 16.0.0 as default in ANY instance of terminal
    nvm use v12.x.y # to use node version once (in this instance of terminal only)
  ```
  - What will happen if I try to run this project w/o following the `engines` versions recommended by the project ("engines" in package.json)? eg. I'm in node v12.22.y and npm v6.14.y (comes with the node v12)
  ![engines_error.png](/assets/engines_error.png)

- Make sure to `npm uninstall -g react-native-cli` to remove older cli and do `npm i -g @react-native-community/cli` (or yarn global add) to get the recommended cli
- Read `template/README.md` OR `README.md of generated project` after using

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
| 0.69         | v0.2.\*  |
| 0.68         | v0.1.0  |

## Template Set up
> Built on top of [react-native-community / react-native-template-typescript](https://github.com/react-native-community/react-native-template-typescript) and default [React Native template](https://github.com/facebook/react-native/tree/main/template)
- react v18.1.0
- react-native v0.69.1
- typescript 4.4.4
- [new JSX transform - no need for React import](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)
- Hermes enabled for iOS and Android
  - recommended to use [Flipper](https://www.youtube.com/watch?v=7R8Gc8oTZVw) as default debugger
  - [Debugging JS on Hermes using Google Chrome's DevTools](https://reactnative.dev/docs/hermes/#debugging-js-on-hermes-using-google-chromes-devtools)
- dev tooling - make sure to read about the `rules in config files` of the following plugins/tools as you won't be able to `commit` if there's any error/warning in staged files
  - eslint
  - tslint
  - prettier
  - path alias
  - husky
  - lint-staged
  - github actions main.yml: eslint checker
  - fastlane
    - bump versions (ios/android)
    - build android `debug` apk
    - notify and upload android apk to slack / telegram
    - github actions integration (optional)
    - interactive options (WIP)

### Blog
- [React v18.0 Blog](https://reactjs.org/blog/2022/03/29/react-v18.html)
- [Announcing React Native 0.69](https://reactnative.dev/blog/2022/06/21/version-069)

### Notes
- [Adopting the New Architecture](https://reactnative.dev/docs/new-architecture-intro)
- [to enable new architecture](https://reactnative.dev/blog/2022/03/15/an-update-on-the-new-architecture-rollout#the-new-architecture-template)

## Issues
- Got a problem running this with `MBP M1`? -- make sure to open terminal of choice using `Rosetta` before running command
- If in case you get an error that says `Reached heap limit Allocation failed` -- increase node memory limit
- `sudo arch -x86_64 gem install ffi`
- `cd ios && rm -rf Pods Podfile.lock && arch -x86_64 pod install && cd ..`