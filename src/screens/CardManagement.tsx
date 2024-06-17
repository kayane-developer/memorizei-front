import { VStack, Text, Box } from 'native-base';

import CardTopComponent from '@/src/components/CardTopComponent';
import CardBottomComponent from '@/src/components/CardBottomComponent';
import TittleComponent from '@/src/components/TittleComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CardRegistration from './CardRegistration';
import DeckRegistration from './DeckRegistration';
import CardFrente from './CardFrente';

export default function CardManagement({ navigation }: any) {
    return (
        <VStack flex={1} alignItems={'center'}>
            <CardTopComponent />
            <CardBottomComponent />
            <Box mt={'10%'} ml={'-25%'} width={'60%'}>
                <TittleComponent>Gerenciamento de cards</TittleComponent>
            </Box>
            <Box flex={1} mt={"25%"} flexDir={"row"}>
                <Box
                    borderColor={'#FF7F50'}
                    borderWidth={2}
                    mr={"15%"}
                    backgroundColor={'white'}
                    width={100}
                    height={85}
                    borderRadius={30}
                    onTouchEnd={() => navigation.navigate(CardRegistration)}
                >
                    <Ionicons
                        name='albums-sharp'
                        color='#FF7F50'
                        style={{
                            fontSize: 40,
                            position: 'absolute',
                            alignSelf: 'center',
                            paddingTop: '20%'
                        }}
                    />
                    <Text
                        position={'absolute'}
                        color='#FF7F50'
                        fontSize={25}
                        fontWeight={'semibold'}
                        alignSelf={'center'}
                        mt={'80%'}
                    >Card</Text>
                </Box>
                <Box
                    borderColor={'#FF7F50'}
                    borderWidth={2}
                    backgroundColor={'white'}
                    width={100}
                    height={85}
                    borderRadius={30}
                    onTouchEnd={() => navigation.navigate(DeckRegistration)}
                >
                    <Ionicons
                        name='cube-sharp'
                        color='#FF7F50'
                        style={{
                            fontSize: 40,
                            position: 'absolute',
                            alignSelf: 'center',
                            paddingTop: '20%'
                        }}
                    />
                    <Text
                        position={'absolute'}
                        color='#FF7F50'
                        fontSize={25}
                        fontWeight={'semibold'}
                        alignSelf={'center'}
                        mt={'80%'}
                    >Baralho</Text>
                </Box>
            </Box>
            <Box mb={"35%"}>
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
                    <Box flex={1} flexDir={'row'} mt={"8%"} ml={"60%"}>
                        <Text color={'black'} fontSize={25} fontWeight={'bold'} ml={"5%"}>150</Text>
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
                    >Inteligência Artifical</TittleComponent>
                    <Box flex={1} flexDir={'row'} mt={"8%"} ml={"60%"}>
                        <Text color={'black'} fontSize={25} fontWeight={'bold'} ml={"5%"}>78</Text>
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
                    <Box flex={1} flexDir={'row'} mt={"8%"} ml={"60%"}>
                        <Text color={'black'} fontSize={25} fontWeight={'bold'} ml={"5%"}>90</Text>
                    </Box>
                </Box>
            </Box>
        </VStack>
    );
}