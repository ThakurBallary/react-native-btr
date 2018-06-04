import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const CheckBox = props => {
    let backgroundColor, color = '#0000';
    if (props.checked) {
        backgroundColor = props.color;
        color = '#fff';
    }
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                backgroundColor,
                borderColor: props.color,
                borderRadius: 1,
                borderWidth: 2,
            }}>
            <Icon name="check" style={{ color, fontSize: 16 }} />
        </TouchableOpacity>
    );
};

CheckBox.propTypes = {
    checked: PropTypes.bool,
    color: PropTypes.string,
    onPress: PropTypes.func,
};

CheckBox.defaultProps = {
    checked: false,
    color: '#000',
};

export default CheckBox;
