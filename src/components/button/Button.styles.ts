import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "../../theme";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: spacing.xxl,
    alignItems: "center",
  },
  label: {
    color: colors.white,
    fontSize: typography.sizes.sm,
    fontFamily: typography.fonts.semiBold,
  },
});
