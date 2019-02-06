import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        <TouchableOpacity onPress={props.buttonFunction}>
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
        </TouchableOpacity>:null
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
  ButtonIcon:"plus-circle-outline"
}