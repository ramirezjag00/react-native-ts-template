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

## Issues
- Got a problem running this with `MBP M1`? -- make sure to open terminal of choice using `Rosetta` before running command
- If in case you get an error that says `Reached heap limit Allocation failed` -- increase node memory limit
- `sudo arch -x86_64 gem install ffi`
- `cd ios && rm -rf Pods Podfile.lock && arch -x86_64 pod install && cd ..`

## Template Usage:

```
npx react-native init appnamehere --template https://github.com/ramirezjag00/react-native-ts-template.git 
```

## Template Set up
> Built on top of [react-native-community / react-native-template-typescript @ 6.10.2](https://github.com/react-native-community/react-native-template-typescript)
- react 17.0.2
- react-native v0.66.4
- typescript 4.4.4
- [new JSX transform - no need for React import](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)
- xcode 13
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
