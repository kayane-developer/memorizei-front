import { VStack, Box, FormControl, Text, Input } from 'native-base';

import CardTopComponent from '@/src/components/CardTopComponent';
import CardBottomComponent from '@/src/components/CardBottomComponent';
import TittleComponent from '../components/TittleComponent';
import ButtonComponent from '../components/ButtonComponent';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DeckRegistration({ navigation }) {
    const schema = yup.object({
        nome: yup.string().required("Campo obrigatório"),
    })

    const { handleSubmit, register, control, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    return (
        <VStack flex={1} alignItems={'center'}>
            <CardTopComponent />
            <CardBottomComponent />
            <Box mt={'10%'} ml={'-50%'} w={"35%"}>
                <TittleComponent>Cadastro de baralho</TittleComponent>
            </Box>
            <Box mt={"25%"}>
                <FormControl mb={"3%"}>
                    <FormControl.Label><Text fontWeight={'bold'} fontSize={20}>Nome do baralho</Text></FormControl.Label>
                    <Controller
                        name='nome'
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                onChangeText={value => onChange(value)}
                                value={value}
                                w={'85%'}
                                borderRadius={'lg'}
                                borderColor={'orange.500'}
                                backgroundColor={"white"}
                            />
                        )}
                    />
                    {errors?.nome && <Text color={"red.600"}>{errors?.nome?.message}</Text>}
                </FormControl>
            </Box>
            <ButtonComponent mt={"5%"} w={"85%"}>Salvar</ButtonComponent>
        </VStack>
    );
}