* Size of components is descriped with Density-Independent Pixels (DIPs): `Physical Pixels = DIPs x Scale Factor`. For example in iPhone 11 Pro Max, there are 414 x 896 points and Scale Factor is 3x so screen has 1242 x 2688 pixels.
* For example, `width: 150` says that width of the component is 150 DIPs
* The be more precise, you can use percents: `width: '50%'`
* To finetune the size of the component, use Dimensions component: `Dimensions.get("screen")`. This gives you an object, which contains DIPs and the Scale Factor. NOTE: it doesn't update the number when user changes the screen orientation! You can get updates with:
```
import { useDimensions } from '@react-native-community/hooks';
```


## Orientations

* The `orientation` in app.json determines if the app supports landscape or portrait. `default` supports both modes.
* You can the get orientation mode with useDimensions hook:
```
import { useDeviceOrientation } from '@react-native-community/hooks';
const {landscape} = useDeviceOrientation();
...
heigh: landscape ? '100%' : '30%',
```

## Flexbox

* Style prop `flex` (or `flexGrow`) defines what kind of space the component is taking. Value 1 means that it takes all of the free space inside it's parent component. Value 0.5 means it takes half of that space.
* FlexDirection sets if the boxes are set horizontally or vertically.
	* Row: horizontally
	* Column: vertically
	* row-reverse or column-reverse set boxes in reverse order
* `justifyContent` sets where the boxes are set in the axis. Options: center, flex-end, flex-start, space-around, space-evenly, space-between
* `alignItems` sets where the boxes are set in the secondary axis (if primary is horizontal, it's then vertical and vice versa). Options: center, baseline, flex-end, flex-start, stretch. NOTE! This applies only to objects in line. If there are multiple lines of content in one component and you want to set position of these all, use `alignContent`
* `alignSelf` sets the objects own position in the axis.
* `flexWrap` determines, how objects in a line are fitted to the screen.
* `flexBasis` sets the size of an item along the primary axis. Therefore, if the primary axis is horizontal, this sets the width of the component. If primary axis is vertical, it sets height.
*  `flexShrink` is same as setting `flex: -1`. It makes the component shrink, if there is not enough space in line for all the objects

## Positioning

* All objects have by default the `position: "relative"`. Setting props such as `top`, `right` etc. do not affect other components but the component where the props are set.
* If instead the `position: absolute` is used in a component, it is positioned relative to it's parent and this affects the other components in the line as well