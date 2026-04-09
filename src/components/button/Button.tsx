import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./Button.styles";

interface ButtonProps {
  label: string;
  onPress: () => void;
}

const Button = ({ label, onPress }: ButtonProps) => (
  <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

export default Button;
