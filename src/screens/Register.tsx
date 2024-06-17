import { VStack, Text, Box, FormControl, Input } from 'native-base';

import CardTopComponent from '@/src/components/CardTopComponent';
import CardBottomComponent from '@/src/components/CardBottomComponent';
import ButtonComponent from '@/src/components/ButtonComponent';
import TittleComponent from '@/src/components/TittleComponent';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

import { saveUser } from '../functions/saveUser';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register({ navigation }: any) {
  const schema = yup.object().shape({
    usuario: yup.string().required("Campo obrigatório"),
    senha: yup.string().required("Campo obrigatório")
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      usuario: '',
      senha: ''
    }
  })

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const save = (data) => {
    saveUser(data, setLoading, setError, setSuccess)
    .then(navigation.navigate("Tabs"))
    console.log(data)
  }

  return (
    <VStack flex={1} alignItems={'center'}>
      <CardTopComponent />
      <CardBottomComponent />
      <Box ml={'-20%'} mt={'15%'} width={'60%'}>
        <TittleComponent>Olá, que bom ter você aqui!</TittleComponent>
      </Box>
      <Box mr={'10%'} mt={'37%'}>
        <Text fontSize={23} fontWeight={'bold'}>Vamos criar seu usuário para</Text>
        <Text fontSize={23} fontWeight={'bold'}>começarmos a usar o</Text>
        <Text
          fontSize={23}
          fontWeight={'bold'}
          position={'absolute'}
          color={'#FF7F50'}
          mt={9}
          ml={'63%'}
        >
          Memorizei
        </Text>
        <Text
          fontSize={23}
          fontWeight={'medium'}
          color={'#000080'}
          position={'absolute'}
          mt={"10%"}
          ml={'93%'}
        >
          !
        </Text>
      </Box>
      <Box mt={"-10%"}>
        <FormControl mt={20}>
          <FormControl.Label><Text fontWeight={'bold'}>Usuário</Text></FormControl.Label>
          <Controller
            name='usuario'
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Input
                onChangeText={value => onChange(value)}
                value={value}
                w={'80%'}
                borderRadius={'lg'}
                borderColor={'orange.500'}
                isRequired={true}
              />
            )}
          />
        </FormControl>
        <Controller
          name='senha'
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <FormControl mt={5}>
              <FormControl.Label><Text fontWeight={'bold'}>Senha</Text></FormControl.Label>
              <Input
                onChangeText={value => onChange(value)}
                value={value}
                type='password'
                w={'80%'}
                borderRadius={'lg'}
                borderColor={'orange.500'}
              />
            </FormControl>
          )}
        />
      </Box>
      <ButtonComponent onPress={handleSubmit(save)}>Registrar</ButtonComponent>
      <Text
        color={'orange.500'}
        fontWeight={'bold'}
        fontSize={'md'}
        mt={5}
        onPress={() => navigation.navigate("Login")}
      >
        Já tenho uma conta!
      </Text>
    </VStack>
  )
}