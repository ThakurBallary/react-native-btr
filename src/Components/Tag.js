import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tag = props => 
  <TouchableOpacity
    onPress={props.onPress}
    style={[
      styles.container,
      {
        backgroundColor: props.style.backgroundColor,
        borderWidth: props.style.borderWidth,
        borderColor: props.style.color,
        borderRadius: props.style.borderRadius
      },
    ]}>
    <Icon
      name={props.iconLeft}
      style={[styles.icon, {
        color: props.style.color,
      }]}
    />
    <Text style={[styles.text, { color: props.style.color }]}>
      {props.name}
    </Text>
    <Icon
      name={props.iconRight}
      style={[styles.icon, {
        color: props.style.color,
      }]}
    />
  </TouchableOpacity>

Tag.propTypes = {
  name: PropTypes.string,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  onPress: PropTypes.func,
};

Tag.defaultProps = {
  name: 'Tag',
  style: { backgroundColor: '#000', color: '#fff', borderRadius: 4, borderWidth: 1 },
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  icon: {
    fontSize: 16,
  },
  text: {
    marginHorizontal: 4,
    marginTop: -2,
  }
});

export default Tag;
