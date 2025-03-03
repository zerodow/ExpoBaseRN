import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const useTheme = () => {
  const { theme, isDarkMode, toggleTheme, followSystem, enableSystemTheme } =
    useContext(ThemeContext)

  return { theme, isDarkMode, toggleTheme, followSystem, enableSystemTheme }
}
