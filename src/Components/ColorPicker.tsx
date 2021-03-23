import React from "react";
import { FlatList, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export type ColorPickerProps = {
  colors?: string[];
  onSelect?: (item: string) => void;
  selectedColor?: string;
};

export function ColorPicker({
  colors = [
    "#F44336",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
    "#795548",
    "#9E9E9E",
    "#607D8B",
  ],
  onSelect = (item: string) => {},
  selectedColor = "#F44336",
}: ColorPickerProps) {
  return (
    <FlatList
      data={colors}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[styles.circle, { backgroundColor: item }]}
          onPress={() => {
            onSelect(item);
          }}
        >
          {selectedColor === item && (
            <Icon name="check" style={{ color: "#fff", fontSize: 24 }} />
          )}
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
  },
});
