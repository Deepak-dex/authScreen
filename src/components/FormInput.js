import React from 'react'
import { View, Text,TextInput } from 'react-native'

import { SIZES,FONTS,COLORS } from '../constants'

const FormInput = ({label,placeHolder,state,setState,isValid,error,formStyle}) => {
  return (
    <View
          style={{
            alignItems: 'flex-start',
            flexDirection: "column",
            ...formStyle
          }}
        >
          <Text
            style={{
                ...FONTS.bodyText1,
                marginBottom: SIZES.base,
            }}
          >
            {label}
          </Text>
            <View
                style={{    
                    flexDirection: 'row',
                }}
            >
            <TextInput
                placeholder={placeHolder}
                value={state}
                onChange={(val) => setState(val)}
                maxLength={10}
                style={{
                flex: 1,
                borderColor:isValid? COLORS.lightGrey:COLORS.red,
                borderWidth: 1,
                padding: SIZES.radius,
                borderRadius: SIZES.radius
                }}
            />
          </View>
          {!isValid && <Text
            style={{
                color: COLORS.red,
                marginTop: 6,
                ...FONTS.secondaryLabel2,
            }}
          >
            {error}  
        </Text>}
        </View>
  )
}

export default FormInput