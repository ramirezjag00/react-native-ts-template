# React Native TS Template

## Template Set up
- react-native >= v0.66
- typescript >= 4.1.0
- eslint
- prettier
- path alias
- husky
- lint-staged
- Hermes enabled for iOS and Android

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