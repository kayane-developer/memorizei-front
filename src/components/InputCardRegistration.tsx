import { FormControl, Input, Text, ITextProps } from "native-base";
import { ReactNode } from "react";

interface InputTextProps extends ITextProps {
  children: ReactNode
}

export default function InputCardRegistration({ children, ...rest }: InputTextProps) {
  return (
    <FormControl mb={"3%"}>
      <FormControl.Label><Text fontWeight={'bold'} fontSize={20}>{children}</Text></FormControl.Label>
      <Input
        w={'85%'}
        borderRadius={'lg'}
        borderColor={'orange.500'}
        backgroundColor={"white"}
        multiline={true}
        textAlignVertical="top"
        {...rest}
      />
    </FormControl>
  )
}