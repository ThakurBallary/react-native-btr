import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

class CollapsibleCard extends Component {
  state = {
    visible: this.props.visibleByDefault,
  };

  render() {
    const icon = this.state.visible ? this.props.iconUp : this.props.iconDown;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.header}
          onPress={() => this.setState({ visible: !this.state.visible })}>
          <Text style={styles.title} numberOfLines={1} ellipseMode="tail">
            {this.props.title}
          </Text>
          <Icon name={icon} style={styles.icon} />
        </TouchableOpacity>
        {this.state.visible &&
          <View style={styles.body}>
            {this.props.children}
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
  title: PropTypes.string,
  iconUp: PropTypes.string,
  iconDown: PropTypes.string,
};

CollapsibleCard.defaultProps = {
  visibleByDefault: false,
  iconUp: 'chevron-up',
  iconDown: 'chevron-down',
};

export default CollapsibleCard;
