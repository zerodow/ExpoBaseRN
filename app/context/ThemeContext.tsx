import { createContext, useState, useEffect, useCallback } from "react"
import { Appearance } from "react-native"
import { Theme, ThemeMode, ThemeContextType } from "@/types/theme"
import { loadString, saveString } from "@/utils/storage"
import STORAGE_KEY from "@/utils/storage/storageKey"
import { darkTheme, lightTheme } from "@/theme"
import { THEME_MODES } from "@/utils/constant"

// 🎯 Create Context with Default Values
export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  isDarkMode: false,
  followSystem: true,
  toggleTheme: () => {},
  enableSystemTheme: () => {},
})

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  const [followSystem, setFollowSystem] = useState<boolean>(true)

  // 🚀 Load Theme from MMKV & System Preference
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = (await loadString(STORAGE_KEY.THEME_KEY)) as ThemeMode | null
        if (savedTheme === THEME_MODES.LIGHT) {
          setTheme(lightTheme)
          setIsDarkMode(false)
          setFollowSystem(false)
        } else if (savedTheme === THEME_MODES.DARK) {
          setTheme(darkTheme)
          setIsDarkMode(true)
          setFollowSystem(false)
        } else {
          setFollowSystem(true)
          applySystemTheme()
        }
      } catch (error) {
        console.error("Error loading theme:", error)
      }
    }
    loadTheme()
  }, [])

  // 🔄 Detect System Theme Changes
  useEffect(() => {
    if (followSystem) {
      const subscription = Appearance.addChangeListener(() => applySystemTheme())
      return () => subscription.remove()
    }
  }, [followSystem])

  // 🚀 Function to Apply System Theme
  const applySystemTheme = () => {
    const systemTheme = Appearance.getColorScheme() // "light" or "dark"
    if (systemTheme === THEME_MODES.DARK) {
      setTheme(darkTheme)
      setIsDarkMode(true)
    } else {
      setTheme(lightTheme)
      setIsDarkMode(false)
    }
  }

  // 🌗 Toggle Between Light & Dark Mode (Manual Selection)
  const toggleTheme = useCallback(async () => {
    const newMode = !isDarkMode
    const newTheme = newMode ? darkTheme : lightTheme
    setTheme(newTheme)
    setIsDarkMode(newMode)
    setFollowSystem(false)
    saveString(STORAGE_KEY.THEME_KEY, newMode ? THEME_MODES.DARK : THEME_MODES.LIGHT)
  }, [isDarkMode])

  // 🎯 Enable System Theme Mode
  const enableSystemTheme = async () => {
    setFollowSystem(true)
    applySystemTheme()
    saveString(STORAGE_KEY.THEME_KEY, THEME_MODES.SYSTEM)
  }

  return (
    <ThemeContext.Provider
      value={{ theme, isDarkMode, followSystem, toggleTheme, enableSystemTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
