# RadioGroup

###### Note: Please bear with the current documentation. Docs will be updated soon.

Selects only one value out of multiple RadioButtons.

### Props
Key | Type | Default
----|----|----
color | string | 
labelStyle | object | {}
radioButtons | array | []
radioButtonBorderWidth | number | 2
onPress | function | () => null
style | object |

### Usage
```
import { RadioGroup } from 'react-native-btr';

state = {
    radioButtons: [
      {
        label: 'In Progress',
        value: 'stage-1',
        checked: true,
        color: '#484',
        disabled: true,
        flexDirection: 'column',
        size: 14
      },
      {
        label: 'Completed',
      }
    ]
}

<RadioGroup 
  color='#484'
  labelStyle={{fontSize: 14}}
  radioButtons={this.state.radioButtons}
  onPress={radioButtons => this.setState({radioButtons})}
/>

###### See RadioButtons in action
:heart: [Live on Expo](https://expo.io/@thakurballary/react-native-btr-demo) :iphone:

``` 
