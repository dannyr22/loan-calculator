import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.sliderBackground,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
  },
  column: {
    flex: 1,
    alignItems: "center",
  },
  value: {
    fontSize: typography.sizes.lg,
    color: colors.grey,
    fontFamily: typography.fonts.light,
  },
  label: {
    fontSize: typography.sizes.xs,
    color: colors.black,
    marginTop: spacing.xs,
    fontFamily: typography.fonts.regular,
  },
});
