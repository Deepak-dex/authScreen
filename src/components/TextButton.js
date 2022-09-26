import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import {FONTS, COLORS, SIZES} from "../constants";

import GradientWrapper from './GradientWrapper';

export default function TextButton({label, disabled, labelStyle, buttonContainerStyle,bgColor, onPress}) {
  return (
    <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
    >
        <GradientWrapper bg={!disabled} bgColor={['#5f61d299','#936dd199','#f84d8099']} style={buttonContainerStyle}>
            <Text style={{ color: COLORS.white, ...FONTS.h3, ...labelStyle}}>
                {label}
            </Text>
        </GradientWrapper>

    </TouchableOpacity>
  );
}
