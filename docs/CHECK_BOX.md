# CheckBox

###### Note: Please bear with the current documentation. Docs will be updated soon.

CheckBox helps you select item.

### Props
Key | Type | Default
----|----|----
checked | boolean | false 
color | string | - 
onPress | function | - 

### Usage
```
import { CheckBox } from 'react-native-btr';

state = {
    checked: false
}

<CheckBox 
    checked={this.state.checked}
    onPress={() => this.setState({checked: !this.state.checked})}  
    color='#009688'
/>

<CheckBox />
``` 