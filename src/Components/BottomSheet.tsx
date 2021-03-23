import React from "react";
import Modal from "react-native-modal";

export type BottomSheetProps = {
  onBackButtonPress?: () => void;
  onBackdropPress?: () => void;
  visible?: boolean;
};

type Props = {
  children: React.ReactChild | React.ReactChild[];
} & BottomSheetProps;

export function BottomSheet({
  children,
  visible = false,
  onBackButtonPress = () => {},
  onBackdropPress = () => {},
}: Props) {
  return (
    <Modal
      isVisible={visible}
      onBackButtonPress={onBackButtonPress}
      onBackdropPress={onBackdropPress}
      style={{ justifyContent: "flex-end", margin: 0 }}
    >
      {children}
    </Modal>
  );
}
