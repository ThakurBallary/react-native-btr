import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import RadioButton from './RadioButton';

class RadioGroup extends Component {
  state = {
    radioButtons: this.props.radioButtons,
  };

  onPress = label => {
    const radioButtons = this.state.radioButtons;
    const currentActive = radioButtons.find(e => e.checked)
    currentActive ? currentActive.checked = false : null;
    radioButtons.find(e => e.label === label).checked = true;
    this.setState({ radioButtons });
    this.props.onPress(this.state.radioButtons)
  };

  render() {
    const { labelStyle, style } = this.props;
    let horizontal = false;
    if (style && style.flexDirection === 'row')
      horizontal = true;
    return (
      <FlatList
        data={this.state.radioButtons}
        extraData={this.state}
        renderItem={({ item }) => (
          <RadioButton
            checked={item.checked}
            color={item.color}
            disabled={item.disabled}
            flexDirection={item.flexDirection}
            onPress={() => this.onPress(item.label)}
            size={item.size}>
            <Text
              style={[
                { margin: 10, color: item.color },
                labelStyle,
              ]}>
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
  labelStyle: PropTypes.object,
  onPress: PropTypes.func,
  radioButtons: PropTypes.array,
  style: PropTypes.object
}

RadioGroup.defaultProps = {
  labelStyle: {},
  onPress: () => null,
  radioButtons: [],
}

export default RadioGroup;