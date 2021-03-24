import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export type TagProps = {
  iconLeft?: string;
  iconRight?: string;
  name?: string;
  onPress?: () => void;
  style?: {
    backgroundColor?: string;
    color?: string;
    borderRadius?: number;
    borderWidth?: number;
  };
};

export function Tag({
  iconLeft,
  iconRight,
  name = "Tag",
  onPress = () => {},
  style = {
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: 4,
    borderWidth: 1,
  },
}: TagProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: style.backgroundColor,
          borderWidth: style.borderWidth,
          borderColor: style.color,
          borderRadius: style.borderRadius,
        },
      ]}
    >
      <Icon
        name={iconLeft}
        style={[
          styles.icon,
          {
            color: style.color,
          },
        ]}
      />
      <Text style={[styles.text, { color: style.color }]}>{name}</Text>
      <Icon
        name={iconRight}
        style={[
          styles.icon,
          {
            color: style.color,
          },
        ]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  icon: {
    fontSize: 16,
  },
  text: {
    marginHorizontal: 4,
    marginTop: -2,
  },
});
