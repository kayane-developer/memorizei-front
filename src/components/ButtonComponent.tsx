import { ReactNode } from "react";
import { ITextProps, Button, Text } from "native-base";

interface ButtonProps extends ITextProps{
    children: ReactNode
}

export default function ButtonComponent({ children, ...rest }: ButtonProps){
    return(
        <Button
            w={'80%'}
            bgColor={'#000080'}
            borderRadius={'lg'}
            mt={10}
            {...rest}
        >
            <Text fontWeight={'bold'} color={'white'}>{children}</Text>
        </Button>
    )
}