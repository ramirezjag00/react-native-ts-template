> Generated using [ramirezjag00/react-native-ts-template](https://github.com/ramirezjag00/react-native-ts-template)

# ProjectName

## To run
```sh
cd [projectName]
npx husky install # do this once git init is done. this will automatically be called on succeeding `npm i`
# edit alias in babel.config.js according to folder structure/names
# edit paths in tsconfig.json according to folder structure/names
npm i # or npm i --legacy-peer-deps or npm i --force

### POD INSTALL
# for mac m1 users
# sudo arch -x86_64 gem install ffi
# cd ios && rm -rf Pods Podfile.lock && arch -x86_64 pod install && cd ..

# or for non-m1/m2 mac users
# cd ios && rm -rf Pods Podfile.lock && pod install && cd ..

npm run [ios/android]
```
---

<details>
<summary>rbenv && fastlane setup and usage</summary>

## rbenv: installing the right version of ruby
```sh
# install rbenv
brew install rbenv

# install ruby version from gemfile e.g. 2.7.6
rbenv install 2.7.6

# in .bash_profile or .zshrc add:
export PATH="$HOME/.rbenv/shims:$PATH"
eval "$(rbenv init -)"

# in terminal, to set a default version of ruby
rbenv global 2.7.6
rbenv local 2.7.6
rbenv rehash
# restart terminal
ruby -v # should output that version
```
## fastlane
```sh
# to get started
# check projectname/fastlane/Fastfile for fastlane actions and comments in it

### FASTLANE
# install dependencies of gemfile
bundle install

# to make sure all plugins are updated to the latest version, run in your project
bundle exec fastlane update_plugins

# to run a fastlane action: check projectname/fastlane/README.md for actions e.g.
bundle exec fastlane android build_qa

# to update fastlane
bundle update fastlane

# for "fastlane x github actions" add the following sample of fastlane actions as jobs: -> steps: in .github/workflow/main.yml

# Runs bundle install
- name: Run bundle install
  run: bundle install

# Runs a fastlane - qa build
- name: Run fastlane - android qa build
  run: bundle exec fastlane android build_qa

# Runs a fastlane - tg notification of a build
- name: Run fastlane - telegram notification and upload apk of a build
  run: bundle exec fastlane notify_upload_to_telegram

# Runs a fastlane - slack notification  and upload of a build
- name: Run fastlane - slack notification and upload apk of a build
  run: bundle exec fastlane notify_upload_to_slack
```
</details>

---
<details>
<summary>Recommended Folder Structure</summary>

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
</details>

## [RN Package Directory](https://github.com/ramirezjag00/react-native-resources#react-native-package-directory)