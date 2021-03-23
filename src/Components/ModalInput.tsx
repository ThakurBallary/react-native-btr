import React from "react";
import {
  Dimensions,
  Modal,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
} from "react-native";

export type ModalInputProps = {
  onCancel?: () => void;
  onOk?: () => void;
};

type Props = {
  children: React.ReactChild | React.ReactChild[];
} & ModalInputProps;

export function ModalInput({
  children,
  onCancel = () => alert("Cancel Pressed"),
  onOk = () => alert("Ok Pressed"),
}: Props) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={true}
      onRequestClose={() => null}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <ScrollView keyboardShouldPersistTaps="always">
            {children}
            <View style={styles.actionsContainer}>
              <TouchableOpacity style={styles.action} onPress={onCancel}>
                <Text>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.action} onPress={onOk}>
                <Text>OK</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0004",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: screenWidth - 40,
    backgroundColor: "#fff",
  },
  actionsContainer: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  action: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: "#eee",
  },
});
