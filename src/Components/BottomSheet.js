import React from 'react';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';

const BottomSheet = props =>
    <Modal
        isVisible={props.visible}
        onBackButtonPress={props.onBackButtonPress}
        onBackdropPress={props.onBackdropPress}
        style={{ justifyContent: 'flex-end', margin: 0 }}
    >
        {props.children}
    </Modal>

BottomSheet.propTypes = {
    visible: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    onBackButtonPress: PropTypes.func,
    onBackdropPress: PropTypes.func
}

BottomSheet.defaultProps = {
    visible: false,
    onBackButtonPress: () => null,
    onBackdropPress: () => null
}

export default BottomSheet;