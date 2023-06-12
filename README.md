# React Native TS Template

## Requirements
- Recommended to install/use `nvm` and version of `node >= v16.0.0` when running the app
  ```bash
    nvm install 18.11.0 # to install v16.10.0 node, comes with npm v8.19.2
    nvm ls # to list out all available/installed versions of node (and see what's currently in use / default)
    nvm alias default 18.11.0 # to use node version 18.11.0 as default in ANY instance of terminal
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
| 0.71         | v0.5.\*  |
| 0.70.6       | v0.4.\*  |
| 0.70         | v0.3.\*  |
| 0.69         | v0.2.\*  |
| 0.68         | v0.1.0  |

## Template Set up
- react v18.2.0
- react-native v0.71.10
- typescript v4.8.4
- [new JSX transform (no need for React import)](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)
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

### [React Native Blogs](https://reactnative.dev/blog/2023/01/27/71rc1-android-outage-postmortem)

### Notes
- [Adopting the New Architecture](https://reactnative.dev/docs/new-architecture-intro)
- [to enable new architecture](https://reactnative.dev/blog/2022/03/15/an-update-on-the-new-architecture-rollout#the-new-architecture-template)

## Issues
- Got a problem running this with `MBP M1`? -- make sure to open terminal of choice using `Rosetta` before running command
- If in case you get an error that says `Reached heap limit Allocation failed` -- increase node memory limit
- `sudo arch -x86_64 gem install ffi`
- `cd ios && rm -rf Pods Podfile.lock && arch -x86_64 pod install && cd ..`