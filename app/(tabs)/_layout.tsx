import { View, Text, Image } from 'react-native';
import { Tabs, Stack } from 'expo-router';
import { icons } from '../../constants';

interface TabIconProps {
  icon: any;  
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        style={{ tintColor: color, marginTop: 50 }}  
        className="w-9 h-9"
      />
      <Text
        className={`${focused ? 'font-psemibold' : 'font-pregular'} text-[10px]`}
        style={{ color, width: 50, textAlign: 'center' }} // Устанавливаем фиксированную ширину и выравнивание текста
        numberOfLines={1} // Ограничиваем текст одной строкой
      >
        {name}
      </Text>
    </View>
  );
};


const TabsLayout: React.FC = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#00FF99',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          backgroundColor: '#616161',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="course"
        options={{
          title: 'Курсы',
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.course} 
            color={color} 
            name="Курсы" 
            focused={focused} />
          ),
        }}
      />

    <Tabs.Screen
            name="home"
            options={{
              title: 'Главная',
              headerShown: true,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon icon={icons.doghouse} 
                color={color} 
                name="Главная" 
                focused={focused} />
              ),
            }}
          />
      
      
      <Tabs.Screen
        name="kalendar"
        options={{
          title: 'Календарь',
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.kalendar} 
            color={color} 
            name="Календарь" 
            focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Профиль',
          headerShown: true,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.user} 
            color={color} 
            name="Профиль" 
            focused={focused} />
          ),
        }}
      />
      
    </Tabs>
  );
};

export default TabsLayout;