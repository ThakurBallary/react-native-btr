import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import RadioButton from './RadioButton';

class RadioGroup extends Component {
  state = {
    radioButtons: this.props.radioButtons
  };

  onPress = label => {
    const radioButtons = this.state.radioButtons;
    const currentActive = radioButtons.find(e => e.checked);
    currentActive ? (currentActive.checked = false) : null;
    radioButtons.find(e => e.label === label).checked = true;
    this.setState({ radioButtons });
    this.props.onPress(this.state.radioButtons);
  };

  render() {
    const { color, labelStyle, style, radioButtonBorderWidth } = this.props;
    let horizontal = false;
    if (style && style.flexDirection === 'row') horizontal = true;
    return (
      <FlatList
        data={this.state.radioButtons}
        extraData={this.state}
        renderItem={({ item }) => (
          <RadioButton
            borderWidth={radioButtonBorderWidth}
            checked={item.checked}
            color={color ? color : item.color}
            disabled={item.disabled}
            flexDirection={item.flexDirection}
            onPress={() => this.onPress(item.label)}
            size={item.size}
          >
            <Text style={[{ margin: 10, color: item.color }, labelStyle]}>
              {item.label}
            </Text>
          </RadioButton>
        )}
        keyExtractor={(item, index) => 'key' + item.label + index}
        horizontal={horizontal}
        style={style}
      />
    );
  }
}

RadioGroup.propTypes = {
  labelStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  color: PropTypes.string,
  onPress: PropTypes.func,
  radioButtons: PropTypes.array,
  radioButtonBorderWidth: PropTypes.number,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
};

RadioGroup.defaultProps = {
  labelStyle: {},
  onPress: () => null,
  radioButtons: [],
  radioButtonBorderWidth: 2
};

export default RadioGroup;
