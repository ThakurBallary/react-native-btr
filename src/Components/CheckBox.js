import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const CheckBox = props => {
    let backgroundColor, color = '#0000';
    if (props.checked) {
        backgroundColor = props.color;
        color = '#fff';
    }
    let onPress = props.onPress;
    let opacity = 1;
    if (props.disabled) {
        onPress = () => null;
        opacity = .4;
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                backgroundColor,
                borderColor: props.color,
                borderRadius: 1,
                borderWidth: 2,
                opacity
            }}>
            <Icon name="check" style={{ color, fontSize: 16 }} />
        </TouchableOpacity>
    );
};

CheckBox.propTypes = {
    checked: PropTypes.bool,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
};

CheckBox.defaultProps = {
    checked: false,
    color: '#000',
    disabled: false,
    onPress: () => null
};

export default CheckBox;
