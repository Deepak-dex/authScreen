import React from "react";
import { View, Text, Image } from "react-native";

import { FONTS, SIZES, COLORS } from "../../constants";

import TextButton from "../../components/TextButton";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function AuthLayout({
  title,
  subtitle,
  label,
  disabled,
  onPress,
  children,
}) {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Title & subtitle */}
        <View
          style={{
            marginTop: SIZES.padding * 3,
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              ...FONTS.h1,
            }}
          >
            {title}
          </Text>

          <Text
            style={{
              ...FONTS.bodyText2,
            }}
          >
            {subtitle}
          </Text>
        </View>

        {/* Content / children */}
        {children}

        {/* Button */}
        <TextButton
          label={label}
          buttonContainerStyle={{
            padding: SIZES.radius,
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            marginBottom: SIZES.radius,
          }}
          labelStyle={{
            ...FONTS.body3,
          }}
          disabled={disabled}
          onPress={onPress}
        />
      </KeyboardAwareScrollView>
    </View>
  );
}
