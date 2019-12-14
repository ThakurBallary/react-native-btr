import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

const RadioButton = props => {
  let onPress = props.onPress;
  let opacity = 1;
  if (props.disabled) {
    onPress = null;
    opacity = 0.2;
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ alignItems: 'center', flexDirection: props.flexDirection }}
    >
      <View
        style={{
          borderColor: props.color,
          borderRadius: props.size * 2,
          borderWidth: props.borderWidth,
          opacity
        }}
      >
        <View
          style={{
            backgroundColor: props.checked ? props.color : '#0000',
            borderRadius: props.size,
            padding: props.size,
            margin: props.size * 0.2
          }}
        />
      </View>
      {props.children}
    </TouchableOpacity>
  );
};

RadioButton.propTypes = {
  borderWidth: PropTypes.number,
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  color: PropTypes.string,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  flexDirection: PropTypes.string,
  onPress: PropTypes.func,
  size: PropTypes.number
};

RadioButton.defaultProps = {
  borderWidth: 2,
  checked: false,
  color: '#000',
  disabled: false,
  flexDirection: 'row',
  onPress: () => null,
  size: 8
};

export default RadioButton;
