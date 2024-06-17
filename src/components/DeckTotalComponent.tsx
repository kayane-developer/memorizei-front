import { Box, Text } from "native-base";
import { ReactNode } from "react";

import TittleComponent from "./TittleComponent";

interface InputTextProps {
    children: ReactNode;
  }

export default function DeckTotalComponent({ children, ...rest }: InputTextProps): JSX.Element {
    return(
            <Box
                alignItems={'center'}
                justifyContent={"center"}
                backgroundColor={"white"}
                borderColor={'orange.500'}
                borderWidth={2}
                borderRadius={20}
                width={360}
                height={24}
                mt={"4"}
            >
                <TittleComponent
                    w={150}
                    alignSelf={"flex-start"}
                    marginLeft={"4%"}
                    fontSize={24}
                >{ children }</TittleComponent>
                <Box flex={1} flexDir={'row'} mt={"13%"} ml={"60%"}>
                    <Text color={'black'} fontSize={25} fontWeight={'bold'} ml={"5%"} {...rest}>150</Text>
                </Box>
            </Box>
    )
}