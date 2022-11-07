import { View, Text,StyleSheet } from "react-native";
import React from "react";

import { FONTS,COLORS,SIZES } from "../constants";
import IconRightArrow from "../../assets/icons/IconRightArrow.svg";

export default function Service({heading,description,children}) {
  return (
    <View style={styles.service}>
      {children}
      <View style={styles.serviceText}>
        <Text style={styles.serviceHeading}>{heading}</Text>
        <Text style={styles.serviceDescription}>
          {description}
        </Text>
      </View>
      <IconRightArrow style={styles.serviceArrowIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
    service:{
        alignItems:'center',
        flex: 1,
        margin: SIZES.base,
        borderWidth: 1,
        borderColor: COLORS.lightGrey,
        backgroundColor: COLORS.lightGrey20,
        borderRadius: SIZES.base*2,
        paddingVertical: SIZES.font*2,
    },
    serviceText:{
        marginTop: SIZES.base,
        maxWidth: "88%"
    },
    serviceHeading:{
        ...FONTS.subH2,
        textAlign:'center'
    },
    serviceDescription:{
        ...FONTS.secondaryLabel1,
        textAlign:'center',
    },
    serviceArrowIcon:{
        height: 10,
        width: 10,
        marginTop: SIZES.padding,
    }
})
