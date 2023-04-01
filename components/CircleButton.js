import { View, Pressable, StyleSheet } from "react-native-web";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function CircleButton({ onPress }) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name={icon} size={24} color="#fff" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    with: 48,
    height: 48,
    mariganHorizontal: 60,
    borderWidth: 4,
    borderColor: "#ffd33d",
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    borderRadius: 42,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
