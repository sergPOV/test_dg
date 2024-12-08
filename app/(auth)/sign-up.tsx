import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';

import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { icons } from '@/constants'; // Добавьте сюда иконки для Google и VK

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    // Логика регистрации
  };

  return (
    <SafeAreaView className="bg-primary h-full mt-7">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Text className="w-115px h-[35px] text-gray-700 text-3xl text-center">
            Мобильный дрессировщик
          </Text>
          <Text className="text-2xl text-gray-700 mt-10 font-psemibold">Зарегистрируйтесь!</Text>

          <FormField
            title="Логин"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />
          <FormField
            title="Электронная почта"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Пароль"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Зарегистрироваться"
            handlePress={() => router.push('/(auth)/questionnaire')}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-700 font-pregular">
              Уже зарегистрированы?
            </Text>
            <Link href="/(auth)/sign-in" className="text-lg font-psemibold text-secondary-100">
              Войдите в аккаунт!
            </Link>
          </View>

          {/* Социальная регистрация */}
          <Text className="text-lg text-gray-700 font-pregular text-center mt-10">
            Или ввойдите через:
          </Text>

          {/* Кнопки для Google и ВКонтакте */}
          <View className="flex-row justify-center gap-4 mt-6">
            <TouchableOpacity
              style={{
                backgroundColor: '#DB4437', // Цвет кнопки Google
                borderRadius: 12,
                paddingHorizontal: 20,
                paddingVertical: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={() => {
                // Логика регистрации через Google
              }}
            >
              <Image source={icons.google} className="w-6 h-6 mr-2" />
              <Text className="text-white font-psemibold">Google</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: '#4C75A3', // Цвет кнопки ВКонтакте
                borderRadius: 12,
                paddingHorizontal: 20,
                paddingVertical: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={() => {
                // Логика регистрации через ВКонтакте
              }}
            >
              <Image source={icons.vk} className="w-6 h-6 mr-2" />
              <Text className="text-white font-psemibold">ВКонтакте</Text>
            </TouchableOpacity>
          </View>

          {/* Условия пользования и Политика конфиденциальности */}
          <View className="mt-10">
            <Text className="text-gray-600 text-sm text-center">
              Регистрируясь, Вы соглашаетесь с{' '}
              <Link 
              href=""
                className="text-secondary-100 font-psemibold"
              >
                Условиями пользования
              </Link>{' '}
              и{' '}
              <Link
                href=""
                className="text-secondary-100 font-psemibold"
              >
                Политикой конфиденциальности
              </Link>.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
