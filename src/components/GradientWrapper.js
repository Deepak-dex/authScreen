import React from 'react'
import {COLORS} from "../constants";
import {LinearGradient} from 'expo-linear-gradient'

export default function GradientWrapper({bg,style,bgColor,children}) {
  return (
    <LinearGradient
            colors= {bg?COLORS.gradientColors:bgColor}   
            start={[0,0]}
            end={[1,1]}
            locations={[0,0.5,1]}
            style={{
                alignItems:"center",
                ...style
            }}
        >
            {children}
        </LinearGradient>
  )
}