import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IconPicker = props => 
  <FlatList
    data={props.icons}
    extraData={props}
    renderItem={({ item }) => 
      <TouchableOpacity
        style={[
          styles.circle,
          { borderColor: props.selectedIcon === item ? '#eee' : '#fff' },
        ]}
        onPress={() => {
          props.onSelect(item);
        }}>
        <Icon name={item} style={styles.icon} />
      </TouchableOpacity>
    }
    keyExtractor={(item, index) => 'key' + index}
    horizontal={true}
    keyboardShouldPersistTaps="always"
    style={{ maxHeight: 75 }}
  />

IconPicker.propTypes = {
  icons: PropTypes.array,
  selectedIcon: PropTypes.string,
  onSelect: PropTypes.func,
};

IconPicker.defaultProps = {
  icons: ['account-circle', 'alarm', 'apps', 'attachment', 'autorenew', 'check', 'close', 'layers', 'star'],
  selectedIcon: 'account-circle',
  onSelect: selectedColor => alert(selectedColor),
};

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  icon: { color: '#888', fontSize: 24 },
});

export default IconPicker;
