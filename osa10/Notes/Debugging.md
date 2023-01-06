## Debugging with Chrome

* Open debugging window in simulator/emulator/device and press `Debug Remote JS`
	* This opens browser in `localhost:<random-port>/debugger-ui/`
* Open DevTools in Chrome and go to the Sources tab
* Click the Pause on exceptions and select Pause on caught exceptions tick
* You can also set breakpoints in the code
* You can see values of variables by adding them to Watch list in DevTools
* Remember to stop remote debugging when done, from the debugging window
* Elements in the DevTools are not the elements in the mobile app!

## Debugging in VScode

* Start remote debugging as with Chrome debugging
* Remember to close the Browser tab after this
* Make sure you have `React Native Tools` extension installed in the VScode
* Go to Debug panel and create a launch.json file, select React Native in the dropdown and tick the Attach to packager
* Go to Code > Preferences > Settings and search for `react-native.packager.port`. Change this value to port which is shown in the Chrome
* Debug console can be opened from View > Debug Console