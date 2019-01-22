import React from 'react';
import {
  Text,
  View,
 TouchableHighlight
} from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

export const WithLableAndAddButton = (props) => {
  return (
    <View style={[props.style,]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 5,
        }}>
        <Text style={{paddingVertical:4}}>{props.Title}</Text>
        {props.showButton?
        <TouchableHighlight onPress={props.buttonFunction}>
          <View
            style={{
              borderRadius: 50,
              paddingHorizontal: 8,
              paddingVertical: 4,
              backgroundColor: props.color,
              flexDirection: 'row',
            }}>
            <Icon name={props.ButtonIcon}color="#fff" size={18} />
            <Text style={{ color: '#fff' }}>{props.ButtonName}</Text>
          </View>
        </TouchableHighlight>:null
        }
      </View>
    </View>
  );
};


WithLableAndAddButton.defaultProps={
  Title:"CardTitle",
  showButton:true,
  buttonFunction:()=>{},
  ButtonName:"Add",
  ButtonIcon:"plus"
}