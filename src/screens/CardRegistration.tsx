import { VStack, Box } from 'native-base';

import CardTopComponent from '@/src/components/CardTopComponent';
import CardBottomComponent from '@/src/components/CardBottomComponent';
import InputCardRegistration from '../components/InputCardRegistration';
import TittleComponent from '../components/TittleComponent';
import ButtonComponent from '../components/ButtonComponent';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

export default function CardRegistration({ navigation }: any) {
    return (
            <VStack flex={1} alignItems={'center'}>
                <CardTopComponent />
                <CardBottomComponent />
                    <Box mt={'5%'} ml={'-85%'}>
                        <TittleComponent>Cadastro de card</TittleComponent>
                    </Box>
                    <Box mt={"15%"}>
                        <InputCardRegistration numberOfLines={1}>Baralho</InputCardRegistration>
                        <InputCardRegistration numberOfLines={1}>Nome do card</InputCardRegistration>
                        <InputCardRegistration numberOfLines={7}>Frente do card</InputCardRegistration>
                        <InputCardRegistration numberOfLines={9}>Verso do card</InputCardRegistration>
                    </Box>
                <ButtonComponent>Salvar</ButtonComponent>
            </VStack>
    );
}