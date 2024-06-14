import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type MaterialIconName = React.ComponentProps<typeof MaterialIcons>["name"];

type IconButtonProp = {
  icon: MaterialIconName;
//   icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: (event: GestureResponderEvent) => void;
};
export default function IconButton({ icon, label, onPress }: IconButtonProp) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },
});
