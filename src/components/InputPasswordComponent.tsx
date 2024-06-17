import { FormControl, Input, Text } from "native-base";
import { ReactNode } from "react";

interface InputPasswordProps {
  children: ReactNode;
  value: string;
  onChangeText: (text: string) => void;
}

export default function InputPasswordComponent({ children, value, onChangeText, ...rest }: InputPasswordProps): JSX.Element {
  return (
    <FormControl mt={5}>
      <FormControl.Label><Text fontWeight={'bold'}>{children}</Text></FormControl.Label>
      <Input
        type='password'
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

