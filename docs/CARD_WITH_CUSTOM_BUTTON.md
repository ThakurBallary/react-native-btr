# ModalInput

###### Note: Please bear with the current documentation. Docs will be updated soon.

CardWithCustomButton is a card with custom button and it consist of hide and show of list provided.

### Props
Key | Type | Default
----|----|----
iconUp | string | 'chevron-up' 
iconDown | string | 'chevron-down'
style | object | - 
title | string | 'CardTitle'
titleStyle | object | -
iconStyle | object | -
buttonFunction |function | -
flatListData | array | [] 
renderItem | function/class(component) | -
separator | function/class(component) | -
minDisplay | number | 3
showButton | boolean | true
buttonColor | string | -

### Usage
```
import { CardWithCustomButton, Separator } from 'react-native-btr';

<CardWithCustomButton
  visibleByDefault={true}
  title='Title'
  buttonFunction={()=>alert('Button pressed')}
  renderItem={({item})=><Text>{item.name}</Text>}
  showButton={true}
  flatListData={[{ name: 'A' }, { name: 'B' }, { name: 'C' }]}
  separator={()=><Separator/>}
  style={{ backgroundColor: '#f8f8f8', paddingVertical: 8 }}
  buttonColor={'#0f0'}
  minDisplay={2}
/>
```