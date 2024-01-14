import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export type CheckBoxProps = {
  checked?: boolean;
  color?: string;
  disabled?: boolean;
  borderRadius?: number;
  borderWidth?: number;
  onPress?: () => void;
};

export function CheckBox({
  checked = false,
  color = "#000",
  disabled = false,
  borderRadius = 1,
  borderWidth = 2,
  onPress = () => {},
}: CheckBoxProps) {
  let backgroundColor,
    checkColor = "#0000";
  if (checked) {
    backgroundColor = color;
    checkColor = "#fff";
  }
  let opacity = 1;
  if (disabled) {
    opacity = 0.4;
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        backgroundColor,
        borderColor: color,
        borderRadius,
        borderWidth,
        opacity,
      }}
    >
      <Icon name="check" style={{ color: checkColor, fontSize: 16 }} />
    </TouchableOpacity>
  );
}
