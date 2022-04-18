import { UiBlock } from "../../UiCommander"

const Text = UiBlock

export const Helper = ({ HelperUi, fieldError, helper }) => {
  return (
    <HelperUi { ...{ fieldError } } >
      <Text>{ fieldError ? fieldError : helper }</Text>
    </HelperUi>
  )
}