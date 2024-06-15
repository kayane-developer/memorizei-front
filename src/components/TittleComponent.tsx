import { Text, ITextProps } from "native-base";
import { ReactNode } from "react";

interface TittleProps extends ITextProps{
    children: ReactNode
}

export default function TittleComponent({ children, ...rest }: TittleProps){
    return(
        <Text
            position={'absolute'}
            color={'#000080'}
            fontWeight={'bold'}
            fontSize={30}
            {...rest}
        >
            { children }
        </Text>
    )
}