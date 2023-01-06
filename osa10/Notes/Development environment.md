* Check that Node version is 12 or higher: `node -v`
* Install Expo-Cli: `sudo npm i -g expo-cli`
* Install Hooks library: `npm i @react-native-community/hooks`
* Install Expo Client from the Appstore to the phone
* Install Visual Studio Code and the extensions:
	* React Native Tools
	* React-Native/React/Redux snippets
	* Prettier - Code formatter
	* Material Icon Theme
	* Enable Format on Save in VScode: Preferences > Settings > formatonsave


## Create new project

* Run: `expo init <project-name>`
* Managed workflow hides Android and iOS code and uses only JavaScript. Bare workflow enabled editing of the Native code
* Blank Managed Workflow works well
* Expo server can be started with: `npm start`. This starts server and opens browser in address `localhost:<random-port>`

## iOS simulator

* You need a Mac
* Install `Xcode` from Appstore
* Go to Xcode > Preferences > Locations > Check that Command Line Tools is installed
* Go to Xcode > Open Developer Tool > Simulator
* Go to Expo server in browser and select Run on iOS simulator
* You can open developer menu in simulator by pressing Command + D (might need to press Control + D first)
* To rotate the orientation, press Command + left or right key


## Android Emulator

* Install Android Studio
* Use Standard installation
* Go to Configure > SDK Manager > Check that the following tools are checked in SDK Tools:
	* Android SDK Build-Tools
	* Android Emulator
	* Android SDK Platform-Tools
	* Intel x86 Emulator Accelerator (HAXM installer)
* If using Linux or macOS add environment variable:
```
[ -d "$HOME/Library/Android/sdk" ] && ANDROID_HOME=$HOME/Library/Android/sdk || ANDROID_HOME=$HOME/Android/Sdk
echo "export ANDROID_HOME=$ANDROID_HOME" >> ~/`[[ $SHELL == *"zsh" ]] && echo '.zshenv' || echo '.bash_profile'`
```
* In addition, in macOS add platform-tools into the bash_profile:
```
echo "export PATH=$ANDROID_HOME/platform-tools:\$PATH" >> ~/`[[ $SHELL == *"zsh" ]] && echo '.zshenv' || echo '.bash_profile'`
```
* Reload the path environment variables by running:
```
source ~/`[[ $SHELL == *"zsh" ]] && echo '.zshenv' || echo '.bash_profile'`
```
* Make sure you can run `adb` from the terminal
* Go to Configure > AVD Manager > Create Virtual Device
	* Select from example `Pixel 3a`
	* Select the latest stable system image, it's usually the second in the Recommended tab
* Start the device from ADV Manager
* Go to Expo server and select Run on Android Device/emulator
* You can open developer menu in emulator by pressing Command + M in macOS or ctrl + M on Windows

## Physical Device

* Install Expo Client from the Appstore
* Scan the QR code from the Expo server view in browser with the mobile device's Expo Client
* Make sure the device is in the same wireless network as the computer
* Developer menu can be opened by shaking the device