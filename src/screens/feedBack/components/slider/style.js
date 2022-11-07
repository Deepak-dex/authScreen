import { StyleSheet } from "react-native";

const s = StyleSheet.create({
    mainContainer:
    {
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      width:"100%",
      aspectRatio:8,
    },
    container:
    {
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      flex: 1,
      flexDirection: "row",
    },
  
    labelValue:
    {
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      flex: 1,
    },
    sliderContainer:
    {
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      height:"100%",
      flex: 8,
    },
    lineContainer:
    {
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      height:4,
      width:"80%",
      flexDirection:'row',
      position: "absolute",
      left:"10%",
      top:"50%",
      marginTop:-3,
      borderRadius: 60,
      backgroundColor:"#f1f1f1",
    },
    line:
    {
      height:"100%",
      width:"100%",
      backgroundColor:"#008ee6",
    },
    draggable:
    {
      alignItems: "center",
      justifyContent: "center",
      height:"100%",
      aspectRatio:1,
      position:'absolute',
      borderRadius:100,
      overflow: "visible",
    },
    circle:
    {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.24,
      shadowRadius: 2.8,
      elevation: 3,
      aspectRatio: 1,
      backgroundColor: "#ffffff",
      borderRadius: 15,
      borderWidth: 1,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: "#f1f1f1",
      overflow: "visible",
      height: 28,
      width:28
    },
  });

  export default s