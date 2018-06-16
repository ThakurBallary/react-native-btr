import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

class SnackBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yPosition: new Animated.Value(-500),
    };
    Animated.timing(this.state.yPosition, {
      toValue: 0,
      duration: 500,
    }).start();
    setTimeout(() => {
      Animated.timing(this.state.yPosition, {
        toValue: -500,
        duration: 500,
      }).start();
    }, this.props.duration);
  }

  render() {
    return (
      <Animated.View
        style={[styles.container, { bottom: this.state.yPosition }]}>
        <Text style={this.props.textStyle}>
          {this.props.text}
        </Text>
        <Text onPress={this.props.onPress} style={this.props.actionTextStyle}>
          {this.props.actionText}
        </Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#222',
    padding: 16,
    alignItems: 'center',
  },
});

SnackBar.propTypes = {
  actionText: PropTypes.string,
  actionTextStyle: PropTypes.object,
  duration: PropTypes.number,
  onPress: PropTypes.func,
  style: PropTypes.object,
  text: PropTypes.string,
  textStyle: PropTypes.object,
};

SnackBar.defaultProps = {
  actionText: 'UNDO',
  actionTextStyle: { color: '#fa0' },
  duration: 5000,
  onPress: () => null,
  style: { backgroundColor: '#222' },
  textStyle: { flex: 1, color: '#fff' },
};

export default SnackBar;
