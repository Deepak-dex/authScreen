import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    mainSection:{
        flex: 1,
        marginHorizontal: "5%",
        marginVertical: 30,
    },
    heading:{
        ...FONTS.h3,
        marginTop: 24,
    },
    subHeading:{
        ...FONTS.subH1,
        marginTop: 34,
    },

    // customRatingBarStyle
    customRatingBarStyle:{
        flexDirection: 'row',
        marginTop: 12,
    },

    // Text Area
    textAreaContainer:{
        position: 'relative',
    },
    textAreaProgress:{
        position: 'absolute',
        top: 24,
        right: 12,
        ...FONTS.footNote1,
        color: COLORS.textBlack60,
    },
    textArea:{
        height: 180,
        borderWidth: 1,
        borderColor: COLORS.grey100,
        borderRadius: 12,
        textAlignVertical: 'top',
        paddingHorizontal: 12,
        paddingVertical: 24,
        marginTop: 15,
        ...FONTS.inputContent
    },

    // rating
    ratingLabelContainer:{
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 18,
        marginBottom: 8
    },
    ratingLabel:{
        ...FONTS.secondaryLabel1
    },

    // btn
    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    btn:{
        borderWidth: 1,
        borderColor: COLORS.primaryPurple,
        borderRadius: 12,
        paddingHorizontal: 26,
        paddingVertical: 12,
        alignItems: 'center'
    },
    btnLabel:{
        ...FONTS.subH1,
        color: COLORS.primaryPurple
    }
})

export default styles