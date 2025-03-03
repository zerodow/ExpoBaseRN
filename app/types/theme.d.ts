export interface Theme {
  colors: any
  spacing: any
}

export type ThemeMode = "light" | "dark" | "system"

export interface ThemeContextType {
  theme: Theme
  isDarkMode: boolean
  followSystem: boolean
  toggleTheme: () => void
  enableSystemTheme: () => void
}
