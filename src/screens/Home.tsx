import { VStack, Box, Text } from 'native-base';

import CardTopComponent from '@/src/components/CardTopComponent';
import CardBottomComponent from '@/src/components/CardBottomComponent';
import FilterComponent from '@/src/components/FilterComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardFrente from './CardFrente';
import TittleComponent from '../components/TittleComponent';

export default function Home({ navigation }: any) {
    return (
        <VStack flex={1} alignItems={'center'}>
            <CardTopComponent />
            <CardBottomComponent />
            <Box mt={'5%'} ml={'40%'}>
                <Ionicons
                    name='person-circle-sharp'
                    color='#000080'
                    style={{ fontSize: 40, position: 'absolute', paddingLeft: '23%' }} />
                <Ionicons
                    name='notifications-sharp'
                    color='#000080'
                    style={{ fontSize: 40, position: 'absolute' }} />
            </Box>
            <Box mt={'18%'}>
                <FilterComponent />
            </Box>
            <Box flex={1} mt={"15%"}>
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
                    onTouchEnd={() => navigation.navigate(CardFrente)}
                >
                    <TittleComponent
                        w={150}
                        alignSelf={"flex-start"}
                        marginLeft={"4%"}
                        fontSize={24}
                    >Sistemas Distribuídos</TittleComponent>
                    <Box flex={1} flexDir={'row'} mt={"10%"} ml={"60%"}>
                        <Text fontWeight={'bold'} color={'red.600'} fontSize={25}>5</Text>
                        <Text fontWeight={'bold'} color={'green.600'} fontSize={25} ml={"5%"}>18</Text>
                        <Text fontWeight={'bold'} color={'black'} fontSize={25} ml={"5%"}>50</Text>
                    </Box>
                </Box>
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
                    >Inteligência Artificial</TittleComponent>
                    <Box flex={1} flexDir={'row'} mt={"10%"} ml={"60%"}>
                        <Text fontWeight={'bold'} color={'red.600'} fontSize={25}>2</Text>
                        <Text fontWeight={'bold'} color={'green.600'} fontSize={25} ml={"5%"}>8</Text>
                        <Text fontWeight={'bold'} color={'black'} fontSize={25} ml={"5%"}>25</Text>
                    </Box>
                </Box>
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
                    >Banco de Dados</TittleComponent>
                    <Box flex={1} flexDir={'row'} mt={"10%"} ml={"60%"}>
                        <Text fontWeight={'bold'} color={'red.600'} fontSize={25}>8</Text>
                        <Text fontWeight={'bold'} color={'green.600'} fontSize={25} ml={"5%"}>27</Text>
                        <Text fontWeight={'bold'} color={'black'} fontSize={25} ml={"5%"}>44</Text>
                    </Box>
                </Box>
            </Box>
        </VStack>
    );
}