import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  Zocial,
  SimpleLineIcons,
} from 'react-native-vector-icons';

export type Icon = {
  name: string;
  type?: string;
};

export type IconPickerProps = {
  icons?: Icon[];
  onSelect?: (icon: Icon) => void;
  selectedIcon?: Icon;
};

const defaultIcons = [
  { type: 'FontAwesome', name: 'comments' },
  { type: 'FontAwesome', name: 'font' },
  { type: 'FontAwesome', name: 'font-awesome' },
  { type: 'FontAwesome', name: 'rocket' },
  { type: 'MaterialCommunityIcons', name: 'account-circle' },
  { type: 'MaterialCommunityIcons', name: 'alarm' },
  { type: 'MaterialCommunityIcons', name: 'apps' },
  { type: 'MaterialCommunityIcons', name: 'attachment' },
  { type: 'MaterialCommunityIcons', name: 'autorenew' },
  { type: 'MaterialCommunityIcons', name: 'check' },
  { type: 'MaterialCommunityIcons', name: 'close' },
  { type: 'MaterialCommunityIcons', name: 'layers' },
  { type: 'MaterialCommunityIcons', name: 'star' },
]

export function IconPicker({
  icons = defaultIcons,
  onSelect = (icon: Icon) => {},
  selectedIcon = defaultIcons[0],
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
          {item.type === 'AntDesign' && <AntDesign name={item.name} style={styles.icon} />}
          {item.type === 'Entypo' && <Entypo name={item.name} style={styles.icon} />}
          {item.type === 'EvilIcons' && <EvilIcons name={item.name} style={styles.icon} />}
          {item.type === 'Feather' && <Feather name={item.name} style={styles.icon} />}
          {item.type === 'FontAwesome' && <FontAwesome name={item.name} style={styles.icon} />}
          {item.type === 'FontAwesome5' && <FontAwesome5 name={item.name} style={styles.icon} />}
          {item.type === 'Fontisto' && <Fontisto name={item.name} style={styles.icon} />}
          {item.type === 'Foundation' && <Foundation name={item.name} style={styles.icon} />}
          {item.type === 'Ionicons' && <Ionicons name={item.name} style={styles.icon} />}
          {item.type === 'MaterialIcons' && <MaterialIcons name={item.name} style={styles.icon} />}
          {item.type === 'MaterialCommunityIcons' && <MaterialCommunityIcons name={item.name} style={styles.icon} />}
          {item.type === 'Octicons' && <Octicons name={item.name} style={styles.icon} />}
          {item.type === 'Zocial' && <Zocial name={item.name} style={styles.icon} />}
          {item.type === 'SimpleLineIcons' && <SimpleLineIcons name={item.name} style={styles.icon} />}
        </TouchableOpacity>
      )}
      keyExtractor={(item: Icon) => item.type + item.name}
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
