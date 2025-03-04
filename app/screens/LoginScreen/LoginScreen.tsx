import { FC } from "react"
import { Text } from "react-native"
import { AppStackScreenProps } from "../../navigators"
import SafeAreaWrapper from "@/components/SafeAreaWrapper"
import { useTheme } from "@/hooks/useTheme"
import { Theme } from "@/types/theme"
import { useTranslation } from "react-i18next"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = () => {
  const { t } = useTranslation(["loginScreen"])

  const { theme } = useTheme()
  const styles = createStyles(theme)

  return (
    <SafeAreaWrapper style={styles.container}>
      <Text>{t("logIn")}</Text>
    </SafeAreaWrapper>
  )
}

const createStyles = (theme: Theme) => {
  return {
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
    },
  }
}
