import { VStack, Text, Box} from 'native-base';
import { Image, StyleSheet } from 'react-native';

import CardTopComponent from '@/src/components/CardTopComponent';
import CardBottomComponent from '@/src/components/CardBottomComponent';
import ButtonComponent from '@/src/components/ButtonComponent';
import InputTextComponent from '@/src/components/InputTextComponent';
import InputPasswordComponent from '@/src/components/InputPasswordComponent';
import TextMemorizei from "@/src/assets/textMemorizei.png";

import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'


export default function Login({ navigation }){
  return(
    <VStack flex={1} alignItems={'center'}> 
      <CardTopComponent />
      <CardBottomComponent />
      <Image 
        source={TextMemorizei} 
        alt={'textMemorizei!'} 
        style={styles.textMemorize} 
      />
      <Box mt={"55%"}>
        <InputTextComponent>Usuário</InputTextComponent>
        <InputPasswordComponent></InputPasswordComponent>
      </Box>
      <ButtonComponent onPress={() => navigation.navigate('Tabs')}>Entrar</ButtonComponent>
      <Text
        color={'orange.500'}
        fontWeight={'bold'}
        fontSize={'md'}
        mt={5}
        onPress={() => navigation.navigate('Register')}
      >
        Sou novo por aqui!
      </Text>
    </VStack>
  );
}

const styles = StyleSheet.create({
  textMemorize: {
    position: 'absolute',
    resizeMode: 'center',
    marginTop: '33%'
  }
})