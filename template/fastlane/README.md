fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew install fastlane`

# Available Actions
### increment_version_ios
```
fastlane increment_version_ios
```
iOS: Increment build number and set the version to package.json version.
### get_version_ios
```
fastlane get_version_ios
```
iOS: get build and version numbers
### increment_version_android
```
fastlane increment_version_android
```
Android: Increment versionCode and set versionName to package.json version.
### get_version_android
```
fastlane get_version_android
```
Android: get version code and name
### bump_version
```
fastlane bump_version
```
Bump build numbers, and set the version to match the pacakage.json version.
### notify_slack
```
fastlane notify_slack
```
Slack: notify team with new build
### upload_to_slack
```
fastlane upload_to_slack
```
Slack: Upload Android APK
### notify_telegram
```
fastlane notify_telegram
```
Telegram: notify team with new build
### notify_upload_to_telegram
```
fastlane notify_upload_to_telegram
```
Telegram: Notify and upload Android APK
### choose_platform
```
fastlane choose_platform
```
Choose platform
### choose_task
```
fastlane choose_task
```
Choose task from options
----

## Android
### android build_qa
```
fastlane android build_qa
```
Android: QA Build

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).