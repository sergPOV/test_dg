import "../global.css";
import { ScrollView, View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/CustomButton';
import { router } from "expo-router";
import { images } from "../constants";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full justify-center items-center min-h-[84vh] px-6'>
          
          {/* Прямоугольник с текстом */}
          <View className="bg-gradient-to-r from-teal-500 to-cyan-600 w-full py-8 mb-12 rounded-xl shadow-lg">
            <Text className='text-4xl text-gray-700 font-semibold text-center'>
              Мобильный дрессировщик
            </Text>
          </View>

          <Image 
            source={images.logodog}
            className="max-w-[200px] w-full h-[200px] mb-6"
            resizeMode="contain"
          />

          <View className='relative mt-6'>
            <Text className="text-lg text-gray-700 font-medium text-center mb-8">
              Планируй свою прогулку и занятия с помощью приложения.
            </Text>
          </View>

          {/* Кнопка */}
          <CustomButton
            title="Продолжить"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-8 py-4 rounded-xl   shadow-lg hover:opacity-90"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#F5F5F5' style='dark' />
    </SafeAreaView>
  );
}
