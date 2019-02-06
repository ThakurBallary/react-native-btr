import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { WithLableAndAddButton } from './WithLabelAndAddButton';
import PropTypes from 'prop-types';

class CardWithCustomButton extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      visible: this.props.visibleByDefault,
    }
  }

  keyExtractor = (item, index) => index.toString();

  render() {
    let {
      iconUp,
      iconDown,
      style,
      title,
      titleStyle,
      iconStyle,
      buttonFunction,
      flatListData,
      renderItem,
      separator,
      minDisplay, 
      showButton, 
      buttonColor
    } = this.props;
    const flatList_Data = ((flatListData.length >= minDisplay) && this.state.visible) ? flatListData.slice(0, minDisplay) : flatListData;
    const { visible } = this.state;
    const icon = this.state.visible ? iconDown : iconUp;
    return (
      <View style={styles.container}>
        <WithLableAndAddButton
          showButton={showButton}
          Title={title}
          buttonFunction={buttonFunction}
          style={style}
          color={buttonColor}
        />
        <FlatList
          data={[...flatList_Data]}
          extraData={flatListData}
          renderItem={renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={separator}
        />
        {(flatListData.length > minDisplay) ?
          <TouchableOpacity
            style={[styles.header, style]}
            onPress={() => this.setState({ visible: !visible })}>
            <Text
              style={[styles.title, titleStyle]}
              numberOfLines={1}
            >
              <Text>{visible ? "See All (" + flatListData.length + ")" : "Collapse"}</Text>
            </Text>
            <Icon name={icon} style={[styles.icon, iconStyle]} />
          </TouchableOpacity>
          : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
  },
  title: { flex: 1 },
  icon: { fontSize: 20 },

});

CardWithCustomButton.propTypes = {
  flatListData: PropTypes.array,
  buttonFunction: PropTypes.func,
  title: PropTypes.string,
  iconUp: PropTypes.string,
  iconDown: PropTypes.string,
}

CardWithCustomButton.defaultProps = {
  visibleByDefault: false,
  iconUp: 'chevron-up',
  iconDown: 'chevron-down',
  flatListData: [],
  minDisplay: 3
};

export default CardWithCustomButton;
