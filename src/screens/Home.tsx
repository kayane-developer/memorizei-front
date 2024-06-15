import { VStack, Text, Box} from 'native-base';

import CardTopComponent from '@/src/components/CardTopComponent';
import CardBottomComponent from '@/src/components/CardBottomComponent';
import FilterComponent from '@/src/components/FilterComponent';
import TittleComponent from '../components/TittleComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home({ navigation }){
    return(
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
                <FilterComponent/>
            </Box>
        </VStack>
    );
}