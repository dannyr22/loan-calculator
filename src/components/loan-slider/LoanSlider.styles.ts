import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
  },
  row: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: spacing.sm,
  },
  label: {
    fontSize: typography.sizes.sm,
    color: colors.black,
    fontFamily: typography.fonts.regular,
  },
  value: {
    fontSize: typography.sizes.md,
    color: colors.grey,
    fontFamily: typography.fonts.light,
  },
  slider: {
    width: "100%",
    height: 40,
  },
});
