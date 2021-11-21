# React Native TS Template
> Generated using [ramirezjag00/react-native-ts-template](https://github.com/ramirezjag00/react-native-ts-template)

## To run:
```sh
cd [projectName]
npx husky install # do this once git init is done
# edit alias in babel.config.js according to folder structure/names
# edit paths in tsconfig.json according to folder structure/names
npm run [ios/android]
```

## Recommended Folder Structure

```
🗂 src
├── 📁 assets  
│   ├── 📁 images 
│   └── 📁 fonts
│
├── 📁 components  
│   ├── 📁 common 
│   │   └── 📄 Button.tsx 
│   │
│   └── 📁 screens
│       ├── 📁 Tab1
│       │    ├── 📁 ScreenA 
│       │    │   ├── 📁 components
│       │    │   └── 📄 ScreenA.tsx
│       │    │ 
│       │    └── 📁 ScreenB 
│       │
│       └── 📁 Tab2
├── 📁 constants 
├── 📁 redux
│    ├── 📁 apis (createApis)
│    ├── 📁 slices (createSlices)
│    └── 📄 store.ts 
├── 📁 routes
│    ├── 📄 BottomTabStack.tsx 
│    ├── 📄 RootStack.tsx 
│    ├── 📄 FirstStack.tsx 
│    ├── 📄 SecondStack.tsx 
│    └── 📄 PreAuthStack.tsx 
├── 📁 types
│    ├── 📁 navigation
│    └── 📄 preauth.ts 
│
└── 📁 utils
    └── 📁 hooks
```

## For reference only:

### Styles
- [ ]  styled-components
- [ ]  rn-whirlwind
- [ ]  rn-extended-stylesheet
- [ ]  light and dark theme

### Navigation
- [ ]  react-navigation

### State Management
- [ ]  redux-toolkit
- [ ]  redux-persist + async storage
- [ ]  zustand

### Data Fetching
- [ ]  swr
- [ ]  react-query
- [ ]  apollo-client
- [ ]  rtk-query
- [ ]  axios
  
### Utility
- [ ]  lodash
- [ ]  dayjs

### Dev Tools and CI/CD
- [ ]  rn-debugger
- [ ]  performance and bench marking
- [ ]  react-native-config
- [ ]  fastlane
- [ ]  app-center and codepush

### Testing
- [ ]  unit testing and integration testing w/ jest and rn-testing-library
- [ ]  e2e with detox

### Local DB
- [ ] RealmDB
- [ ] rn-sqlite-storage
- [ ] WatermelonDB

### Extra
- [ ]  splash screen
- [ ]  app icon
- [ ]  rn-vector-icons
- [ ]  google firebase
- [ ]  tsdoc + typedoc
- [ ]  storybook
