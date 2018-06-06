import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const Divider = props => 
  <View style={{borderTopWidth: props.size, borderColor: props.color}} />

Divider.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Divider.defaultProps = {
  size: 1,
  color: '#eee',
};

export default Divider;
