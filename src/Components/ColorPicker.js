import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ColorPicker = props =>
  <FlatList
    data={props.colors}
    extraData={props}
    renderItem={ ({ item }) => 
      <TouchableOpacity
        style={[styles.circle, { backgroundColor: item }]}
        onPress={() => {
          props.onSelect(item);
        }}>
        {props.selectedColor === item &&
          <Icon name="check" style={{ color: '#fff', fontSize: 24 }} />}
      </TouchableOpacity>}
    keyExtractor={(item, index) => 'key' + index}
    horizontal={true}
    keyboardShouldPersistTaps="always"
    style={{ maxHeight: 75 }}
  />
  
ColorPicker.propTypes = {
  colors: PropTypes.array,
  selectedColor: PropTypes.string,
  onSelect: PropTypes.func
};

ColorPicker.defaultProps = {
  colors: ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B"],
  selectedColor: '#F44336',
  onSelect: (selectedColor) => alert(selectedColor)
};

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ColorPicker;
