import React from "react";
import { FlatList, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export type IconPickerProps = {
  icons?: string[];
  onSelect?: (icon: string) => void;
  selectedIcon?: string;
};

export function IconPicker({
  icons = [
    "account-circle",
    "alarm",
    "apps",
    "attachment",
    "autorenew",
    "check",
    "close",
    "layers",
    "star",
  ],
  onSelect = (icon: string) => {},
  selectedIcon = "account-circle",
}: IconPickerProps) {
  return (
    <FlatList
      data={icons}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            styles.circle,
            { borderColor: selectedIcon === item ? "#eee" : "#fff" },
          ]}
          onPress={() => {
            onSelect(item);
          }}
        >
          <Icon name={item} style={styles.icon} />
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => "key" + index}
      horizontal={true}
      keyboardShouldPersistTaps="always"
      style={{ maxHeight: 75 }}
    />
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
  },
  icon: { color: "#888", fontSize: 24 },
});
