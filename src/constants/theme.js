import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primaryBlue: "#5F61D2", 
    primaryPurple: "#936DD1", 
    primaryPink: "#F84D80", 

    white: "#FFFFFF",
    black: "#333333",
    darkGrey: "#858585",
    grey: "#C2C2C2",
    lightGrey: "#EAEAF4",
    lightGrey80: "#EEEEF7",
    lightGrey60: "#F2F2F9",
    lightGrey40: "#F6F7FB",
    lightGrey20: "#FCFCFD",

    blue: "#506CFC",
    green: "#13B56A",
    yellow: "#F5B63A",
    red: "#FF2A43",

    gradientColors: ["#5F61D2","#936DD1","#F84D80"],
    // "135deg, #5F61D2 0%, #936DD1 48.75%, #F84D80 100%"
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    h1: 28,
    h2: 24,
    h3: 18,

    subH1: 16,
    subH2: 14,

    secondaryLabel: 12,

    bodyText: 14,
    inputContent: 14, 

    footNote: 10,

    // app dimensions
    width,
    height
};
export const FONTS = {  
    h1: { fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h1, lineHeight: 42 },
    h2: { fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h2, lineHeight: 36 },
    h3: { fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h3, lineHeight: 27 },

    subH1: { fontFamily: 'Poppins-SemiBold', fontSize: SIZES.subH1, lineHeight: 24 },
    subH2: { fontFamily: 'Poppins-SemiBold', fontSize: SIZES.subH2, lineHeight: 21 },

    bodyText1: { fontFamily: 'Poppins-Regular', fontSize: SIZES.bodyText, lineHeight: 21 },
    bodyText2: { fontFamily: 'Poppins-Regular', fontSize: SIZES.bodyText, lineHeight: 21, color: COLORS.darkGrey },

    inputContent: { fontFamily: 'Poppins-SemiBold', fontSize: SIZES.inputContent, lineHeight: 21 },

    secondaryLabel1: { fontFamily: 'Poppins-Regular', fontSize: SIZES.secondaryLabel, lineHeight: 18, color: COLORS.darkGrey },
    secondaryLabel2: { fontFamily: 'Poppins-Medium', fontSize: SIZES.secondaryLabel, lineHeight: 18 },
    secondaryLabel3: { fontFamily: 'Poppins-Regular', fontSize: SIZES.secondaryLabel, lineHeight: 18 },
    
    footNote1: { fontFamily: 'Poppins-Regular', fontSize: SIZES.footNote, lineHeight: 15 },
    footNote2: { fontFamily: 'Poppins-Regular', fontSize: SIZES.footNote, lineHeight: 15, color: COLORS.darkGrey },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
