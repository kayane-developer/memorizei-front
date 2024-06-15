import { FormControl, Input, Text, ITextProps } from "native-base";
import { ReactNode } from "react";
import * as React from 'react';

interface InputPasswordProps extends ITextProps{
  children: ReactNode
}

export default function InputPasswordComponent({ ...rest }){
    return(
        <FormControl mt={5}>
          <FormControl.Label><Text fontWeight={'bold'}>Senha</Text></FormControl.Label>
          <Input
            type='password'
            w={'80%'}
            borderRadius={'lg'}
            borderColor={'orange.500'}
          />
        </FormControl>
    )
}

