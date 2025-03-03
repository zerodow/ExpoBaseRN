import { observer } from "mobx-react-lite"
import { FC, useEffect, useRef, useState } from "react"
import { StyleSheet, Text, TextInput } from "react-native"
import { useStores } from "../../models"
import { AppStackScreenProps } from "../../navigators"
import SafeAreaWrapper from "@/components/SafeAreaWrapper"
import { useTheme } from "@/hooks/useTheme"
import { Theme } from "@/types/theme"
import { useTranslation } from "react-i18next"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen(_props) {
  const { t, i18n } = useTranslation(["loginScreen"])

  const authPasswordInput = useRef<TextInput>(null)

  const [authPassword, setAuthPassword] = useState("")
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [attemptsCount, setAttemptsCount] = useState(0)
  const {
    authenticationStore: { authEmail, setAuthEmail, setAuthToken, validationError },
  } = useStores()

  const { theme } = useTheme()
  const styles = createStyles(theme)

  useEffect(() => {
    // Here is where you could fetch credentials from keychain or storage
    // and pre-fill the form fields.
    setAuthEmail("ignite@infinite.red")
    setAuthPassword("ign1teIsAwes0m3")

    // Return a "cleanup" function that React will run when the component unmounts
    return () => {
      setAuthPassword("")
      setAuthEmail("")
    }
  }, [setAuthEmail])

  const error = isSubmitted ? validationError : ""

  function login() {
    setIsSubmitted(true)
    setAttemptsCount(attemptsCount + 1)

    if (validationError) return

    // Make a request to your server to get an authentication token.
    // If successful, reset the fields and set the token.
    setIsSubmitted(false)
    setAuthPassword("")
    setAuthEmail("")

    // We'll mock this with a fake token.
    setAuthToken(String(Date.now()))
  }

  return (
    <SafeAreaWrapper style={styles.container}>
      <Text>{t("logIn")}</Text>
    </SafeAreaWrapper>
  )
})

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
  })
}
