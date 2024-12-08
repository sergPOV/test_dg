import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import FormField from '@/components/FormField';

const Questionnaire = () => {
  const [form, setForm] = useState({
    ownerName: '',
    dogName: '',
    dogBreed: '',
    dogAge: '',
  });

  const handleSkip = () => {
    router.push('/(tabs)/home'); // Перенаправление на главный экран
  };

  const handleSave = () => {
    console.log('Анкета сохранена:', form); // Логируем данные анкеты (можно заменить на API вызов)
    router.push('/(tabs)/profile'); // Перенаправление в профиль
  };

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className="flex-1 px-4 py-6"
        >
          <View className="flex-1 justify-center">
            <Text className="text-2xl font-psemibold text-gray-700 mb-6 text-center">
              Заполните анкету
            </Text>

            <FormField
              title="Ваше имя"
              value={form.ownerName}
              handleChangeText={(text) => setForm({ ...form, ownerName: text })}
              otherStyles="mb-5"
            />

            <FormField
              title="Кличка собаки"
              value={form.dogName}
              handleChangeText={(text) => setForm({ ...form, dogName: text })}
              otherStyles="mb-5"
            />

            <FormField
              title="Порода собаки"
              value={form.dogBreed}
              handleChangeText={(text) => setForm({ ...form, dogBreed: text })}
              otherStyles="mb-5"
            />

            <FormField
              title="Возраст собаки (в годах)"
              value={form.dogAge}
              handleChangeText={(text) => setForm({ ...form, dogAge: text })}
              keyboardType="numeric"
              otherStyles="mb-5"
            />
          </View>

          <View className="flex-row justify-between mt-6">
            {/* Кнопка Пропустить анкету */}
            <TouchableOpacity
              onPress={handleSkip}
              className="flex-1 mr-2 h-12 rounded-xl justify-center items-center bg-gray-700"
            >
              <Text className="text-secondary-100 font-psemibold text-base">
                Пропустить анкету
              </Text>
            </TouchableOpacity>

            {/* Кнопка Сохранить анкету */}
            <TouchableOpacity
              onPress={handleSave}
              className="flex-1 ml-2 h-12 bg-secondary-100 rounded-xl justify-center items-center"
            >
              <Text className="text-black font-psemibold text-base">
                Сохранить анкету
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Questionnaire;
