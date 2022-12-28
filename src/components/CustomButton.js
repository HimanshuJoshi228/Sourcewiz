import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../assets/colors';

const CustomButton = ({
  style,
  bgColors,
  activeopacity,
  onPress,
  textcolor,
  fontsize,
  fontweight,
  title,
  radius,
  letterSpacing,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={activeopacity || 0.65}
      onPress={onPress}
      style={[
        style,
        {
          padding: 13,
          alignItems: 'center',
          borderRadius: radius || 12,
          backgroundColor: bgColors || COLORS.signInBtn,
        },
      ]}>
      <Text
        style={{
          color: textcolor || COLORS.white,
          fontSize: fontsize || 16,
          fontWeight: fontweight || '500',
          letterSpacing: letterSpacing,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
