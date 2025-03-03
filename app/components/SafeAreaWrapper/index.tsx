import {
  SafeAreaView as SafeAreaViewComponent,
  SafeAreaViewProps,
} from "react-native-safe-area-context"

interface Props extends SafeAreaViewProps {}

const SafeAreaWrapper: React.FC<Props> = (props) => {
  return (
    <SafeAreaViewComponent edges={["left", "right", "top"]} {...props} style={[{}, props.style]}>
      {props.children}
    </SafeAreaViewComponent>
  )
}

export default SafeAreaWrapper
