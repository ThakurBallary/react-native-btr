import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

class CollapsibleCard extends Component {
  state = {
    visible: this.props.visibleByDefault,
  };

  render() {
    const { children, iconUp, iconDown, style, title, titleStyle, iconStyle } = this.props;
    const { visible } = this.state; 
    const icon = this.state.visible ? iconUp : iconDown;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.header, style]}
          onPress={() => this.setState({ visible: !visible })}>
          <Text style={[styles.title, titleStyle]} numberOfLines={1} ellipseMode="tail">
            {title}
          </Text>
          <Icon name={icon} style={[styles.icon, iconStyle]} />
        </TouchableOpacity>
        {visible &&
          <View style={styles.body}>
            {children}
          </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    elevation: 2,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
  header: {
    padding: 16,
    flexDirection: 'row',
  },
  title: { flex: 1 },
  icon: { fontSize: 20 },
  body: {
    borderTopWidth: 1,
    borderColor: '#eee',
  },
});

CollapsibleCard.propTypes = {
  visibleByDefault: PropTypes.bool,
  style: PropTypes.object,
  title: PropTypes.string,
  titleStyle: PropTypes.object,
  iconUp: PropTypes.string,
  iconDown: PropTypes.string,
  iconStyle: PropTypes.object,
};

CollapsibleCard.defaultProps = {
  visibleByDefault: false,
  iconUp: 'chevron-up',
  iconDown: 'chevron-down',
};

export default CollapsibleCard;
