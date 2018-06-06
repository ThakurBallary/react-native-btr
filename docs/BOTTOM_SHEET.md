# BottomSheet

###### Note: Please bear with the current documentation. Docs will be updated soon.

BottomSheet is a modal which open from bottom of the screen. Typically used to display more actions.

### Props
Key | Type | Default
----|----|----
visible | bool | false 
onBackButtonPress | function | ()=>null
onBackdropPress | function | ()=>null

### Usage
```
import { BottomSheet } from 'react-native-btr';

state = {
    visible: false
}

toggle = () => this.setState({visible: !this.state.visible})

<Text onPress={this.toggle}>

<BottomSheet 
  visible={this.state.visible}
  onBackButtonPress={this.toggle}
  onBackdropPress={this.toggle}
>
    <Text>You Component Here</Text>
</BottomSheet>

``` 