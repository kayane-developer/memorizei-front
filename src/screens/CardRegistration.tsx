import { VStack, Box } from 'native-base';

import CardTopComponent from '@/src/components/CardTopComponent';
import CardBottomComponent from '@/src/components/CardBottomComponent';
import InputCardRegistration from '../components/InputCardRegistration';
import TittleComponent from '../components/TittleComponent';
import ButtonComponent from '../components/ButtonComponent';

export default function CardRegistration({ navigation }) {
    return (
            <VStack flex={1} alignItems={'center'}>
                <CardTopComponent />
                <CardBottomComponent />
                    <Box mt={'5%'} ml={'-85%'}>
                        <TittleComponent>Cadastro de card</TittleComponent>
                    </Box>
                    <Box mt={"15%"}>
                        <InputCardRegistration>Baralho</InputCardRegistration>
                        <InputCardRegistration>Nome do card</InputCardRegistration>
                        <InputCardRegistration numberOfLines={8}>Frente do card</InputCardRegistration>
                        <InputCardRegistration numberOfLines={8}>Verso do card</InputCardRegistration>
                    </Box>
                <ButtonComponent>Salvar</ButtonComponent>
            </VStack>
    );
}