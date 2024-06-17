import { VStack, Box, Text } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CardTopComponent from '@/src/components/CardTopComponent';
import CardBottomComponent from '@/src/components/CardBottomComponent';
import TittleComponent from '@/src/components/TittleComponent';
import FilterComponent from '@/src/components/FilterComponent';
import DeckTotalComponent from '../components/DeckTotalComponent';

export default function SharedCards({ navigation }: any) {
    return (
        <VStack flex={1} alignItems={'center'}>
            <CardTopComponent />
            <CardBottomComponent />
            <Box mt={'10%'} ml={'-6%'} width={'80%'}>
                <TittleComponent>Banco compartilhado de cards</TittleComponent>
            </Box>
            <Box mt={'25%'}>
                <FilterComponent />
            </Box>
            <Box flex={1} mt={"15%"}>
                <DeckTotalComponent>Sistemas Distribuídos</DeckTotalComponent>
                <Ionicons
                    name='cloud-download'
                    color='#000080'
                    style={{ fontSize: 30, position: 'absolute', marginLeft: 275, marginTop: 35 }} />
            </Box>
        </VStack>
    );
}