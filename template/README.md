# React Native TS Template
> Generated using [ramirezjag00/react-native-ts-template](https://github.com/ramirezjag00/react-native-ts-template)

## To run
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

## RN Package Directory

### Styling / UI
- [ ]  styled-components
- [ ]  react-native-extended-stylesheet
- [ ]  tailwind-react-native-classnames
- [ ]  react-native-whirlwind
- [ ]  react-native-tailwindcss
- [ ]  restyle
- [ ]  react-native-paper
- [ ]  react-native-elements
- [ ]  fluentui-react-native

### Animations
- [ ]  react-native-reanimated
- [ ]  react-native-skia
- [ ]  lottie-react-native
- [ ]  moti
- [ ]  d3.js + react-native-svg

### 3D
- [ ]  three.js
- [ ]  BabylonReactNative
- [ ]  unity / unreal
- [ ]  expo-gl
- [ ]  react-native-game-engine

### Navigation
- [ ]  react-navigation

### Network / Data Fetching
- [ ]  axios
- [ ]  apollo-client
- [ ]  redux-toolkit-query
- [ ]  swr
- [ ]  react-query

### State Management
- [ ]  redux-toolkit
- [ ]  zustand
- [ ]  jotai
- [ ]  xstate
- [ ]  state-pool
- [ ]  recoil

### Local DB / Storage
- [ ]  react-native-quick-sqlite
- [ ]  redux-persist + async storage
- [ ]  react-native-mmkv
- [ ]  react-native-mmkv-storage
- [ ]  react-native-sqlite-storage
- [ ]  react-native-sqlite-2
- [ ]  WatermelonDB
- [ ]  RealmDB

### Encryption
- [ ] redux-persist-transform-encrypt
- [ ] react-native-quick-md5
- [ ] react-native-quick-base64
- [ ] react-native-aes-gcm-crypto

### Dev Tools
- [ ]  flipper
- [ ]  react-native-debugger
- [ ]  react-native-performance
- [ ]  react-native-network-logger
- [ ]  react-native-netinfo
- [ ]  react-native-device-info
- [ ]  react-native-config
- [ ]  rnx-kit
- [ ]  react-native-test-app
- [ ]  react-native-multithreading
- [ ]  lerna
- [ ]  json-server
- [ ]  lowdb
- [ ]  jsonplaceholder
- [ ]  benchmark
- [ ]  vscode extension: gitlens
- [ ]  vscode extension: quokka.js
- [ ]  vscode extension: thunder client
- [ ]  vscode extension: vim

### System
- [ ]  react-native-push-notification
- [ ]  react-native-notifications
- [ ]  notifee
- [ ]  react-native-firebase
- [ ]  react-native-permissions
- [ ]  react-native-keychain
- [ ]  react-native-contacts
- [ ]  react-native-communications
- [ ]  react-native-modalize
- [ ]  react-native-modal
- [ ]  react-native-webview
- [ ]  react-native-autoheight-webview
- [ ]  @react-native-clipboard/clipboard
- [ ]  react-native-styled-toast
- [ ]  react-native-root-toast
- [ ]  react-native-toast-message
- [ ]  react-native-tab-view
- [ ]  react-native-progress
- [ ]  react-native-hyperlink
- [ ]  react-native-confetti
- [ ]  @sanar/react-native-highlight-text
- [ ]  react-native-restart
- [ ]  react-native-exit-app
- [ ]  react-native-background-timer
- [ ]  react-native-skeleton-placeholder
- [ ]  react-native-shimmer-placeholder

### Forms
- [ ]  react-hook-form
- [ ]  react-native-simple-radio-button
- [ ]  @react-native-picker/picker
- [ ]  react-native-picker-select
- [ ]  react-native-dropdown-picker
- [ ]  @react-native-community/datetimepicker
- [ ]  react-native-modal-datetime-picker
- [ ]  react-native-date-picker
- [ ]  react-native-calendars
- [ ]  formik
- [ ]  form-validation-react-native
- [ ]  react-native-checkbox-reanimated
- [ ]  @react-native-community/checkbox
- [ ]  react-native-bouncy-checkbox

### Maps
- [ ]  react-native-maps
- [ ]  react-native-maps-directions
- [ ]  react-native-cluster-map
- [ ]  react-native-geolocation
- [ ]  react-native-geolocation-service
- [ ]  react-native-background-geolocation
- [ ]  darron1217/react-native-background-geolocation
- [ ]  react-native-google-places-autocomplete

### Media
- [ ]  react-native-camera
- [ ]  react-native-vision-camera
- [ ]  react-native-video
- [ ]  react-native-webrtc
- [ ]  react-native-callkeep
- [ ]  react-native-sound
- [ ]  react-native-gifted-chat
- [ ]  react-native-fast-image
- [ ]  @freakycoder/react-native-progressive-fast-image
- [ ]  react-native-webp-format
- [ ]  react-native-sketch-canvas
- [ ]  react-native-markdown-display
- [ ]  react-native-lightbox
- [ ]  react-native-image-viewing
- [ ]  react-native-image-picker
- [ ]  react-native-render-html
- [ ]  react-native-gifted-chat
- [ ]  react-native-snap-carousel
- [ ]  react-native-image-crop-picker
- [ ]  react-native-signature-capture
- [ ]  react-native-background-upload
- [ ]  react-native-qrcode-svg
- [ ]  react-native-qrcode-scanner

### Utility
- [ ]  lodash
- [ ]  dayjs
- [ ]  moment.js
- [ ]  luxon
- [ ]  rxjs
- [ ]  fbt
- [ ]  intl and react-intl
- [ ]  fuse.js
- [ ]  uuid
- [ ]  Numeral-js
- [ ]  credit-card-type
- [ ]  url-parse
- [ ]  query-string
- [ ]  form-date
- [ ]  useHooks
- [ ]  react-use
- [ ]  fs
- [ ]  react-native-fs
- [ ]  steno

### CI / CD
- [ ] github actions
- [ ] fastlane
- [ ] app-center
- [ ] react-native-code-push

### Testing
- [ ]  jest and eslint-plugin-jest
- [ ]  react-native-testing-library
- [ ]  detox
- [ ]  redux-mock-store
- [ ]  fetch-mock
- [ ]  jest-fetch-mock
- [ ]  detox
- [ ]  msw
- [ ]  miragejs
- [ ]  nock
- [ ]  react-native-mock

### Extras
- [ ]  react-native-splash-screen
- [ ]  react-native-onboarding-swiper
- [ ]  app icon
- [ ]  react-native-lazy-index
- [ ]  react-native-vector-icons
- [ ]  react-icons
- [ ]  google firebase
- [ ]  bugsnag
- [ ]  tsdoc + typedoc
- [ ]  oblador/loki
- [ ]  storybook
- [ ]  skele
- [ ]  react-native-macos
- [ ]  react-native-windows
- [ ]  viro
- [ ]  PyTorch Live

### Others
- Bash for basic scripting/automation
- C++ for JSI
- Ruby for Fastlane's Fastfile
