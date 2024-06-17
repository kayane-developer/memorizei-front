import { VStack, Text, Box, FormControl, useToast } from 'native-base';
import { Image, StyleSheet } from 'react-native';

import CardTopComponent from '@/src/components/CardTopComponent';
import CardBottomComponent from '@/src/components/CardBottomComponent';
import ButtonComponent from '@/src/components/ButtonComponent';
import TextMemorizei from "@/src/assets/textMemorizei.png";
import InputTextComponent from '../components/InputTextComponent';
import InputPasswordComponent from '../components/InputPasswordComponent';

import { loginUser } from '../functions/loginUser';

import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }: any) {
  
  const [user, setUser] = useState('')
  const [userPass, setUserPass] = useState('')
  const toast = useToast();

  useEffect(() => {
    async function verifyLogin(){
      const userId = await AsyncStorage.getItem('userId')
      if(userId){
        navigation.replace("Tabs")
      }
    }
    verifyLogin()
  }, [])

  async function handleLogin() {
    const result = await loginUser(user, userPass)
    if(result){
      const userId = result.data.id
      const userName = result.data.user
      AsyncStorage.setItem('userId', userId)
      AsyncStorage.setItem('userName', userName)
      navigation.navigate("Tabs")
    }else{
      toast.show({ 
        title: "Erro no login!",
        description: "Usuário ou senha inválidos!"
       })
    }
  }

  return (
    <VStack flex={1} alignItems={'center'}>
      <CardTopComponent />
      <CardBottomComponent />
      <Image
        source={TextMemorizei}
        alt={'textMemorizei!'}
        style={styles.textMemorize}
      />
      <Box mt={"55%"}>
        <FormControl mt={"20%"}>
          <InputTextComponent value={user} onChangeText={setUser}>Usuário</InputTextComponent>
        </FormControl>
        <FormControl>
          <InputPasswordComponent value={userPass} onChangeText={setUserPass}>Senha</InputPasswordComponent>
        </FormControl>
      </Box>
      <ButtonComponent onPress={handleLogin}>Entrar</ButtonComponent>
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