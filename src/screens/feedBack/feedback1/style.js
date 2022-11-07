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
    ratingLabelContainer:{
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 8
    },
    ratingLabel:{
        ...FONTS.secondaryLabel1
    },
    // feedback section 
    feedBackList:{
        flex: 1,
        marginVertical: 18,
    },
    feedBackItem:{
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: COLORS.grey100,
        borderRadius: 12,
        padding: 12,
        marginVertical: 8
    },
    feedBackLabel:{
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
    },
    btnLabel:{
        ...FONTS.subH1,
        color: COLORS.primaryPurple
    }
})

export default styles