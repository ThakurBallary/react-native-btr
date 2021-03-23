import React, { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export type CollapsibleCardProps = {
  iconDown?: string;
  iconStyle?: object;
  iconUp?: string;
  style?: object;
  title?: string;
  titleStyle?: object;
  visible?: boolean;
};

type Props = {
  children: React.ReactChild | React.ReactChild[];
} & CollapsibleCardProps;

export function CollapsibleCard({
  children,
  iconDown = "expand-more",
  iconStyle,
  iconUp = "expand-less",
  style,
  title,
  titleStyle,
  visible = false,
}: Props) {
  const [isVisible, setIsVisible] = useState(visible);

  function toggle() {
    setIsVisible((isVisible) => !isVisible);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.header, style]} onPress={toggle}>
        <Text style={[styles.title, titleStyle]} numberOfLines={1}>
          {title}
        </Text>
        <Icon
          name={isVisible ? iconUp : iconDown}
          style={[styles.icon, iconStyle]}
        />
      </TouchableOpacity>
      {isVisible && <View style={styles.body}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    elevation: 2,
    backgroundColor: "#fff",
    borderRadius: 2,
  },
  header: {
    padding: 16,
    flexDirection: "row",
  },
  title: { flex: 1 },
  icon: { fontSize: 20 },
  body: {
    borderTopWidth: 1,
    borderColor: "#eee",
  },
});
