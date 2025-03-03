import { ErrorInfo } from "react"
import { Text } from "react-native"

export interface ErrorDetailsProps {
  error: Error
  errorInfo: ErrorInfo | null
  onReset(): void
}

/**
 * Renders the error details screen.
 * @param {ErrorDetailsProps} props - The props for the `ErrorDetails` component.
 * @returns {JSX.Element} The rendered `ErrorDetails` component.
 */
export function ErrorDetails(props: ErrorDetailsProps) {
  return (
    <Text>asdasdasd</Text>
    // <Screen
    //   preset="fixed"
    //   safeAreaEdges={["top", "bottom"]}
    //   contentContainerStyle={themed($contentContainer)}
    // >
    //   <View style={$topSection}>
    //     <Icon icon="ladybug" size={64} />
    //     <Text style={themed($heading)} preset="subheading" tx="errorScreen:title" />
    //     <Text tx="errorScreen:friendlySubtitle" />
    //   </View>

    //   <ScrollView
    //     style={themed($errorSection)}
    //     contentContainerStyle={themed($errorSectionContentContainer)}
    //   >
    //     <Text style={themed($errorContent)} weight="bold" text={`${props.error}`.trim()} />
    //     <Text
    //       selectable
    //       style={themed($errorBacktrace)}
    //       text={`${props.errorInfo?.componentStack ?? ""}`.trim()}
    //     />
    //   </ScrollView>

    //   <Button
    //     preset="reversed"
    //     style={themed($resetButton)}
    //     onPress={props.onReset}
    //     tx="errorScreen:reset"
    //   />
    // </Screen>
  )
}
