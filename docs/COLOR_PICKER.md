# Color Picker

###### Note: Please bear with the current documentation. Docs will be updated soon.

Horizontally scrollable circles with collors filled.

### Props
Key | Type | Default
----|----|----
colors | array | ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B"]
selectedColor | string | '#F44336'
onSelect | function | selectedColor => alert(selectedColor) 

### Usage
```
import { ColorPicker } from 'react-native-btr';

state = {
    selectedColor: '#F44336'
}

<ColorPicker 
  selectedColor={this.state.selectedColor}
  onSelect={selectedColor => this.setState({selectedColor})}
/>
``` 