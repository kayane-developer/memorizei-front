import { VStack, Text, Box} from 'native-base';

import CardTopComponent from '@/src/components/CardTopComponent';
import CardBottomComponent from '@/src/components/CardBottomComponent';
import TittleComponent from '@/src/components/TittleComponent';
import FilterComponent from '@/src/components/FilterComponent';

export default function SharedCards({ navigation }){
    return(
        <VStack flex={1} alignItems={'center'}>
            <CardTopComponent />
            <CardBottomComponent />
            <Box mt={'10%'} ml={'-6%'} width={'80%'}>
                <TittleComponent>Banco compartilhado de cards</TittleComponent>
            </Box>
            <Box mt={'30%'}>
                <FilterComponent/>
            </Box>
        </VStack>
    );
  }