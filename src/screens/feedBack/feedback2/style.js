import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    mainSection:{
        flex: 1,
        marginHorizontal: "5%",
        marginVertical: 30
    },
    heading:{
        ...FONTS.h3,
    },
    subHeading:{
        ...FONTS.subH1,
        marginTop: 34,
    },

    // feedback section 
    feedBackList:{
        flex: 1,
        marginVertical: 18,
    },
    feedBackItem:{
        borderWidth: 1,
        borderColor: COLORS.grey100,
        borderRadius: 12,
        padding: 12,
        marginVertical: 8
    },
    feedBackHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    feedBackLabel:{
        flex: 0.9,
        ...FONTS.subH2,
    },
    feedBackIconContainer:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginRight: 8,
    },
    likeIcon:{
        marginRight: 8,
    },

    // FeedBack rating
    ratingContainer:{
        padding: 12
    },
    ratingHeader:{
        ...FONTS.inputContent
    },
    ratingLabelContainer:{
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 18,
        marginBottom: 8
    },
    ratingLabel:{
        ...FONTS.secondaryLabel1
    },

    // FeedBack Desc
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
        borderWidth: 1,
        borderColor: COLORS.grey100,
        borderRadius: 12,
        textAlignVertical: 'top',
        paddingHorizontal: 12,
        paddingVertical: 24,
        marginTop: 15,
        ...FONTS.inputContent
    },

    // btn
    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn:{
        borderWidth: 1,
        borderColor: COLORS.primaryPurple,
        borderRadius: 12,
        paddingHorizontal: 26,
        paddingVertical: 12,
    },
    btnLabel:{
        ...FONTS.subH1,
        color: COLORS.primaryPurple
    }
})

export default styles