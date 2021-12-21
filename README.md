# React Native TS Template

## Requirements
- Make sure to `npm uninstall -g react-native-cli` to remove older cli and do `npm i -g @react-native-community/cli` (or yarn global add) to get the recommended cli
- Recommended to use `nvm` and version of `node >= v16.0.0` when running the app and for the packager
- Got a problem running this with `MBP M1`? -- make sure to open terminal of choice using `Rosetta` before running command
- Read `template/README.md` OR `README.md of generated project` after using


## Usage:

```
npx react-native init appnamehere --template https://github.com/ramirezjag00/react-native-ts-template.git 
```

## Template Set up
> Built on top of [react-native-community / react-native-template-typescript @ 6.8.5](https://github.com/react-native-community/react-native-template-typescript)
- react 17.0.2
- react-native v0.66.4
- typescript 4.4.4
- [new JSX transform - no need for React import](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)
- xcode 13
- eslint
- tslint
- prettier
- path alias
- husky
- lint-staged
- Hermes enabled for iOS and Android
