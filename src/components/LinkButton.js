import React from 'react'
import { Text,Pressable } from 'react-native'

import { SIZES,COLORS } from '../constants'

export default function LinkButton({label,onPress,style}) {
  return (
    <Pressable
        onPress={onPress}
        style={{
          marginLeft: SIZES.base,
          ...style
        }}
      >
        <Text
          textAlignVertical="bottom"
          style={{
            textDecorationLine: "underline",
            color: COLORS.blue,
          }}
        >
        {label}
        </Text>
      </Pressable>
  )
}