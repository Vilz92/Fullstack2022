* We have to use basic building blocks provided by react-native:
```
import { StyleSheet, Text, View } from 'react-native'
```
* For example, View compiles to UIView in iOS and AndroidView in Android
* By default React Native uses Function components over Class components
* You can log with `console.log()`. Actions from the simulator/device are shown in Expo server

## Component classes

* SafeAreaView component makes sure that any component does not hide behind e.g. the iPhone's top notch
* Text component has prop numberOfLines which tells how many lines the textbox can include
* Image data for the Image component can be fetched with: `source={require(./assets/icon.png)}`
* To use images from remote locations, you have to use an object with three values: uri, width and height
* To make components without onPress props clickable, they can be wrapped in Touchable components, such as TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight or TouchableNativeFeedback
* You can use native alert functionality with function `alert()`. For more alert versions, use Alert component

## Styles

* Styles can be defined with plain JavaScript objects, such as `{ backgroundColor: "orange" }` or with `StyleSheet.create({ container: { backgroundColor: "orange" } })`. Pros of using Stylesheet.create is that it validates the props for mispelling etc. and gives an error. Plain object does not just give any errors, it just does not work. Another pro is that React Native may be implementing some optimizations on using Stylesheet method over plain objects.
* Styles can be combined with array of plain objects or objects created with Stylesheet.create. Props in the latter ones overwrite the ones in previous ones
* Information about the statusbar on top of the device screen can be fetched with StatusBar component. For example, height of the bar can be fetched with: `StatusBar.currentHeight`

## Platform-specific code

* Platfrom can be determined with Platform component. To check if the device is Android, write: `Platform.OS === "android" ? ...`


## File structure

* Create folder `app` which contains all the source code and the assets
* Under `app` create a `screens` folder, which contains all of the views used in the app. Views can be named e.g. `WelcomeScreen.js`
* Under `app` folder, create a folder `config` which contains for example a file `colors.js`, which contains color codes in variables in an object.

## Snippets

* rsf = React Stateless Function
* rnss = React Native StyleSheet