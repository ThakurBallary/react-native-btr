import React from "react";
import { View } from "react-native";

export type SeparatorProps = {
  color?: string;
  size?: number;
};

export function Separator({ color = "#eee", size = 1 }: SeparatorProps) {
  return <View style={{ borderTopWidth: size, borderColor: color }} />;
}
