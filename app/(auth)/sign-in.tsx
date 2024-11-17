import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react';
import { Link, router } from 'expo-router';

import FormField from '@/components/FormField';
import  CustomButton  from '@/components/CustomButton';

const SignIn = () => {
  const [form, setForm] = useState({
    email:'',
    password:''
  })

const [isSubmitting, setIsSubmitting] = useState(false)

const submit = () =>{

}


  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">

        <Text className="w-115px h-[35px] text-white text-3xl">Мобильный дрессировщик</Text>
        <Text className="text-2xl text-blue-500 mt-10 font-psemibold">Войдите в аккаунт</Text>

      <FormField 
      title="Электронная почта"
      value={form.email}
      handleChangeText={(e)=> setForm({...form, email: e})}
      otherStyles="mt-7"
      keyboardType="email-address"
      />
      <FormField 
      title="Пароль"
      value={form.password}
      handleChangeText={(e)=> setForm({...form, password: e})}
      otherStyles="mt-7"
      />
      
      <CustomButton 
      title='Войти'
      handlePress={() => router.push('../(tabs)/profile')}
      containerStyles="mt-7"
      isLoading={isSubmitting}
      />
      <View className="justify-center pt-5 flex-row gap-2">
        <Text className="text-lg text-gray-100 font-pregular">
          У вас нет аккаунта?
        </Text>
        <Link href="/(auth)/sign-up" className="text-lg font-psemibold text-secondary">Зарегистрируйтесь!</Link>
      </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn