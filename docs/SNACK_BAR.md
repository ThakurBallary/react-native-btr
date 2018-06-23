# SnackBar

###### Note: Please bear with the current documentation. Docs will be updated soon.

Pass duration={0} to close SnackBar onPress of action. 

### Props
Key | Type | Default
----|----|----
actionText | string | UNDO 
actionTextStyle | object | {color: '#fa0'}
duration | number | 5000
onPress | function | () => null 
style | object | {backgroundColor: '#222'}
text | string | 
textStyle | object | {flex: 1, color: '#fff'}

### Usage
```
import { SnackBar } from 'react-native-btr';

<SnackBar 
  text='Your message here'
  onPress={()=>alert('UNDO Pressed')}
/>
``` 