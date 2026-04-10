import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "../../theme";

const SLIDER_HEIGHT = 40;
const TRACK_HEIGHT = 8;
const TICK_HEIGHT = 20;

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
  sliderContainer: {
    height: SLIDER_HEIGHT,
    justifyContent: "center",
  },
  trackBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: (SLIDER_HEIGHT - TRACK_HEIGHT) / 2,
    height: TRACK_HEIGHT,
    borderRadius: TRACK_HEIGHT / 2,
    backgroundColor: colors.primaryLight,
    flexDirection: "row",
    overflow: "hidden",
  },
  trackFill: {
    backgroundColor: colors.primary,
    height: TRACK_HEIGHT,
  },
  slider: {
    position: "absolute",
    left: 0,
    right: 0,
    height: SLIDER_HEIGHT,
  },
  ticks: {
    position: "absolute",
    left: 0,
    right: 0,
    top: (SLIDER_HEIGHT - TICK_HEIGHT) / 2,
    height: TICK_HEIGHT,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tick: {
    width: 2,
    height: TICK_HEIGHT,
    backgroundColor: colors.primaryLight,
  },
  tickSpacer: {
    width: 2,
    height: TICK_HEIGHT,
    backgroundColor: "transparent",
  },
});
