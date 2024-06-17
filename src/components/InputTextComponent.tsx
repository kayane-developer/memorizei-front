import { FormControl, Input, Text } from "native-base";
import { ReactNode } from "react";

interface InputTextProps {
  children: ReactNode;
  value: string;
  onChangeText: (text: string) => void;
}

export default function InputTextComponent({ children, value, onChangeText, ...rest }: InputTextProps): JSX.Element {
  return (
    <FormControl>
      <FormControl.Label><Text fontWeight={'bold'}>{children}</Text></FormControl.Label>
      <Input
        w={'80%'}
        borderRadius={'lg'}
        borderColor={'orange.500'}
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
    </FormControl>
  )
}