import { FormControl, Input, Text, ITextProps } from "native-base";
import { ReactNode } from "react";

interface InputTextProps extends ITextProps{
    children: ReactNode
}

export default function InputTextComponent({ children, ...rest }: InputTextProps){
    return(
        <FormControl mt={20}>
          <FormControl.Label><Text fontWeight={'bold'}>{ children }</Text></FormControl.Label>
          <Input
            w={'80%'}
            borderRadius={'lg'}
            borderColor={'orange.500'}
            { ...rest }
            
          />
        </FormControl>
    )
}