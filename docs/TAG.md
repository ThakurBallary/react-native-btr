# Tag

###### Note: Please bear with the current documentation. Docs will be updated soon.

Tags helps to find relevant information.

### Props
Key | Type | Default
----|----|----
name | string | Tag 
style | object | {backgroundColor: '#000', color: '#fff', borderRadius: 4, borderWidth: 1} 
iconLeft | string | - 
iconRight | string | - 
onPress | function | - 

### Usage
```
import { Tag } from 'react-native-btr';

<Tag 
  name='important'
  style={{backgroundColor: '#f41', color: '#fff', borderRadius: 50, borderWidth: 1}}
  iconLeft='plus-circle'
  iconRight='close-circle'
  onPress={()=>alert('Tag Pressed')}
/>

<Tag />
``` 