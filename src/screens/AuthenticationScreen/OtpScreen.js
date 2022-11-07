import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import OTPInputView from "@twotalltotems/react-native-otp-input";

import { FONTS, SIZES, COLORS } from "../../constants";

import AuthLayout from "./AuthLayout";
import LinkButton from "../../components/LinkButton";

const OtpScreen = () => {
  const [timer, setTimer] = useState(60);
  const [resend, setResend] = useState(true);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState(true);
  const [isFilled, setIsFilled] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("+91 9876543210");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
        if (!resend && timer > 0) 
          setTimeout(() => setTimer(prev=> prev - 1), 1000);
        else if (!resend && timer <= 0){
          setResend(true)
          setTimer(60)
        }
  }, [timer,resend]);

  return (
    <AuthLayout
      title="OTP Verification"
      subtitle="We have sent a 4 digit pin on your mobile no"
      label="Continue"
      disabled={isDisabled}
      onPress={() => console.log("onBoarding")}
    >
      {/* Change number */}
      <View
        style={{
          flexDirection: "row"
        }}
      >
      <Text
        style={{
          ...FONTS.subH2
        }}
      >
        {phoneNumber}
      </Text>
      <LinkButton label="Change" onPress={()=>console.log("Change pressed")} /> 
      </View>

      {/* OTP inputs */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 3,
        }}
      >
        <OTPInputView
          pinCount={4}
          style={{
            width: "80%",
            height: SIZES.padding*2,
          }}
          codeInputFieldStyle={{
            width: SIZES.padding*2  ,
            height: SIZES.padding*2,
            borderRadius: SIZES.base,
            borderWidth: 1,
            borderColor: otpError?COLORS.red:isFilled?COLORS.green:COLORS.grey,
            backgroundColor: COLORS.lightGray2,
            color: COLORS.black,
            ...FONTS.h3,
          }}
          onCodeChanged={(code) => setOtp(code) }
          onCodeFilled={(code) => setIsFilled(true)}
        />

        {/* resend / Timer */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding,
          }}
        >
          {resend?
          <Text style={{ ...FONTS.bodyText1 }}>Din't receive OTP?</Text>:
          <Text style={{ ...FONTS.bodyText2 }}>Resend OTP in {timer} seconds</Text>
          }
          {resend && <LinkButton label="Resend" onPress={()=>setResend(false)}/>}
        </View>
      </View>

    </AuthLayout>
  );
};

export default OtpScreen;
