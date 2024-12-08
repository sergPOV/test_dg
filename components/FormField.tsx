import { View, Text, TextInput, TextInputProps, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { icons } from '@/constants';

interface FormFieldProps extends TextInputProps {
  title: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  value?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  title,
  placeholder = '',
  handleChangeText,
  otherStyles = '',
  value='',
  ...props
}) => {
    const [showPassword, setshowPassword] = useState(false)
    const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-700 font-pmedium">{title}</Text>

      <View
        className={`border-2 w-full h-16 px-4 bg-primary rounded-2xl items-center flex-row ${
          isFocused ? 'border-secondary-100' : 'border-gray-700'
        }`}
      >

        <TextInput className="flex-1 text-gray-700 font-psemibold text-base" 
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Пароль" && !showPassword}
        onFocus={() => setIsFocused(true)}  // Установка фокуса
        onBlur={() => setIsFocused(false)}   // Снятие фокусаф
        />

        {title === 'Пароль' && (
            <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
                <Image source={!showPassword ? icons.eyeHide: icons.eye}
                className='w-6 h-6'
                resizeMode='contain'
                />
            </TouchableOpacity>
        )} 

      </View>
      
    </View>
  );
};

export default FormField;