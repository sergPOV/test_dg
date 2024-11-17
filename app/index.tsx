import "../global.css"
import { ScrollView, View, Text, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/CustomButton';
import { Link, Redirect, router } from "expo-router"
import { images } from "../constants"
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className='w-full justify-center items-center min-h-[84vh] px-4'>
          
        <Text className='text-3xl text-white font-bold text-center'>
              Мобильный дрессировщик
            </Text>

          <Image 
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

           <View className='relative mt-5'>
              <Text className='text-2xl text-white font-bold text-center'>
              Ты никогда не пожалеешь, что взял собаку, если будешь ее воспитывать
              </Text>
           </View>

           <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
              Планируй свою прогулку и занятия с помощью приложения, получай обратную связь от инструктора
            </Text>
            <CustomButton
            title="Продолжить"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

    <StatusBar backgroundColor='#161622' style='light'
    />

    </SafeAreaView>
  );
}
