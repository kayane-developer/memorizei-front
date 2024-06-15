import { Box, FormControl, Input } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function InputTextComponent(){
    return(
        <FormControl>
          <Box>
            <Box flex={1} alignItems={'center'}>
              <Input
                w={360}
                borderRadius={'lg'}
                borderColor={'#000080'}
                backgroundColor={'white'}
                position={'absolute'}
                marginLeft={-170} 
                fontSize={16}
              />
            </Box>
            <Ionicons
              name='search-sharp' 
              color='#000080' 
              style={{ fontSize: 25, position: 'absolute', marginLeft: 140, marginTop: 10}} />
            </Box>
        </FormControl>
    )
}