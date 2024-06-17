import { VStack, Text, Box } from 'native-base';

import CardTopComponent from '@/src/components/CardTopComponent';
import CardBottomComponent from '@/src/components/CardBottomComponent';
import TittleComponent from '@/src/components/TittleComponent';
import CardFrente from './CardFrente';

export default function CardVerso({ navigation }: any) {
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
                onTouchEnd={() => navigation.navigate(CardFrente)}
            >
                <TittleComponent fontSize={30} ml={"10%"} mt={"10%"}>Arquitetura</TittleComponent>
                <Text fontSize={20} fontWeight={'bold'} mt={"30%"} w={"80%"} alignSelf={'center'}>
                    Os tipos de arquitetura distribuída são:
                </Text>
                <Text fontSize={20} fontWeight={'bold'} mt={"10%"} w={"80%"} alignSelf={'center'}>- Centralizadas</Text>
                <Text fontSize={20} fontWeight={'bold'} mt={"5%"} w={"80%"} alignSelf={'center'}>- Desentralizadas</Text>
                <Text fontSize={20} fontWeight={'bold'} mt={"5%"} w={"80%"} alignSelf={'center'}>- Híbridas</Text>
            </Box>
            <Box
                borderColor={'#20A044'}
                borderWidth={2}
                mr={"50%"}
                mt={"8%"}
                backgroundColor={'white'}
                width={"22%"}
                height={"9%"}
                borderRadius={20}
                justifyContent={'center'}
                onTouchEnd={() => navigation.navigate("Tabs")}
            >
                <Text
                    position={'absolute'}
                    color='#20A044'
                    fontSize={20}
                    fontWeight={'semibold'}
                    alignSelf={'center'}
                    
                >Fácil</Text>
            </Box>
            <Box
                borderColor={'#000080'}
                borderWidth={2}
                mr={"-2%"}
                mt={"-16%"}
                backgroundColor={'white'}
                width={"22%"}
                height={"9%"}
                borderRadius={20}
                justifyContent={'center'}
                onTouchEnd={() => navigation.navigate("Tabs")}
            >
                <Text
                    position={'absolute'}
                    color='#000080'
                    fontSize={20}
                    fontWeight={'semibold'}
                    alignSelf={'center'}
                    
                >Médio</Text>
            </Box>
            <Box
                borderColor={'#DB3737'}
                borderWidth={2}
                mr={"-55%"}
                mt={"-16.5%"}
                backgroundColor={'white'}
                width={"22%"}
                height={"9%"}
                borderRadius={20}
                justifyContent={'center'}
                onTouchEnd={() => navigation.navigate("Tabs")}
            >
                <Text
                    position={'absolute'}
                    color='#DB3737'
                    fontSize={20}
                    fontWeight={'semibold'}
                    alignSelf={'center'}
                    
                >Difícil</Text>
            </Box>
        </VStack>
    )
}