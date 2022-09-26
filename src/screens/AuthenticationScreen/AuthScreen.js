import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

// import {IconCheckboxChecked, IconCheckboxUncheck,IconNumberCorrect} from '../../constants/icons'
import IconCheckboxChecked from "../../../assets/icons/IconCheckboxChecked.svg";
import IconCheckboxUncheck from "../../../assets/icons/IconCheckboxUncheck.svg";
import IconNumberCorrect from "../../../assets/icons/IconNumberCorrect.svg";

import { FONTS, SIZES, COLORS } from "../../constants";
import AuthLayout from "./AuthLayout";


import GradientWrapper from "../../components/GradientWrapper";
import LinkButton from "../../components/LinkButton";

const AuthScreen = () => {
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (phoneNumber.length == 10) setIsDisabled(false);
    else if (!isDisabled) setIsDisabled(true);
  }, [phoneNumber]);

  const renderInput = () => {
    return (
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TextInput
            defaultValue="+91"
            value={countryCode}
            // onChange={(val) => setCountryCode(val)}
            // keyboardType="number-pad"
            // maxLength={3}
            showSoftInputOnFocus={false}
            style={{
              flex: 1,
              marginRight: SIZES.base,
              padding: SIZES.radius,
              backgroundColor: COLORS.lightGrey20,
              borderWidth: 1,
              borderColor: COLORS.grey,
              borderRadius: SIZES.base,
              ...FONTS.inputContent,
            }}
          />
          <GradientWrapper
            bg={isFocused}
            bgColor={
              phoneNumberError
                ? [COLORS.red, COLORS.red, COLORS.red]
                : [COLORS.grey, COLORS.grey, COLORS.grey]
            }
            style={{
              flex: 8,
              flexDirection: "row",
              borderRadius: SIZES.base,
              padding: 1,
            }}
          >
            <TextInput
              placeholder="00000000"
              value={phoneNumber}
              placeholderTextColor="#C2C2C2"
              onChangeText={(val) =>
                setPhoneNumber(val.replace(/[- ,./]/gi, ""))
              }
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              keyboardType="number-pad"
              maxLength={10}
              style={{
                flex: 1,
                padding: SIZES.radius,
                borderRadius: SIZES.base,
                backgroundColor: COLORS.lightGrey20,
                ...FONTS.inputContent,
              }}
            />
          </GradientWrapper>
        </View>
        {phoneNumberError && (
          <Text
            style={{
              ...FONTS.secondaryLabel1,
              color: COLORS.red,
              marginTop: SIZES.base,
              marginLeft: "20%",
            }}
          >
            Incorrect Mobile Number! Please check and enter again
          </Text>
        )}
      </View>
    );
  };

  const renderTerms = () => {
    return (
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          onPress={() => setIsSelected((prev) => !prev)}
          style={{
            marginRight: SIZES.base,
          }}
        >
          {isSelected ? (
            <IconCheckboxChecked height={24} width={24} />
          ) : (
            <IconCheckboxUncheck height={24} width={24} />
          )}
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          <Text style={{ ...FONTS.bodyText2 }}>
            By clicking this, you agree with our
          </Text>
          <LinkButton
            label="Privacy policy"
            onPress={() => console.log("change pressed")}
          />
          <Text style={{ ...FONTS.bodyText2 }}> and</Text>
          <LinkButton
            label="Terms of Conditions"
            onPress={() => console.log("TNC pressed")}
          />
        </View>
      </View>
    );
  };

  return (
    <AuthLayout
      title="Login/Sign Up"
      subtitle="Please enter your mobile number to continue"
      label="Continue"
      disabled={isDisabled}
      onPress={() => console.log("registered")}
    >
      {/* input*/}
      {renderInput()}

      {/* Terms & Cond  */}
      {renderTerms()}
    </AuthLayout>
  );
};

export default AuthScreen;
