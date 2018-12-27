import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CheckBox = props => {
    let backgroundColor, color = '#0000';
    if (props.checked) {
        backgroundColor = props.color;
        color = '#fff';
    }
    let onPress = props.onPress;
    let opacity = 1;
    if (props.disabled) {
        opacity = .4;
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={props.disabled}
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
    checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    color: PropTypes.string,
    disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    onPress: PropTypes.func,
};

CheckBox.defaultProps = {
    checked: false,
    color: '#000',
    disabled: false,
    onPress: () => null
};

export default CheckBox;
