import { VStack, Text, Box } from 'native-base';

import CardTopComponent from '@/src/components/CardTopComponent';
import CardBottomComponent from '@/src/components/CardBottomComponent';
import TittleComponent from '@/src/components/TittleComponent';
import CardVerso from './CardVerso';

export default function CardFrente({ navigation }: any) {
    return (
        <VStack flex={1} alignItems={'center'}>
            <CardTopComponent />
            <CardBottomComponent />
            <Box mt={'15%'} ml={'-25%'} width={'60%'}>
                <TittleComponent>Sistemas Distribuídos</TittleComponent>
            </Box>
            <Box
                borderColor={'#FF7F50'}
                borderWidth={2}
                backgroundColor={'white'}
                width={"80%"}
                height={"50%"}
                borderRadius={30}
                mt={"35%"}
                onTouchEnd={() => navigation.navigate(CardVerso)}
            >
                <TittleComponent fontSize={30} ml={"10%"} mt={"10%"}>Arquitetura</TittleComponent>
                <Text fontSize={20} fontWeight={'bold'} mt={"30%"} w={"80%"} alignSelf={'center'}>
                    Cite os tipos de arquiteturas mais comuns em sistemas distribuídos.
                </Text>
            </Box>
        </VStack>
    )
}