import { Theme } from "@/types/theme"
import { colors } from "./colors/colors"
import { colorsDark } from "./colors/colorsDark"
import { spacing } from "./spacing/spacing"
import { spacingDark } from "./spacing/spacingDark"

export const lightTheme: Theme = {
  colors,
  spacing,
}
export const darkTheme: Theme = {
  colors: colorsDark,
  spacing: spacingDark,
}
