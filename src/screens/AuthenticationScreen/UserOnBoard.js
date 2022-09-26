import React, { useState } from "react";
import { View } from "react-native";

import { SIZES } from "../../constants";

import AuthLayout from "./AuthLayout";
import FormInput from "../../components/FormInput";

const UserOnBoard = () => {
  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIEmailsValid] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <AuthLayout
      title="Account Created!"
      subtitle="Fill up some of your personal details"
      label="Continue"
      disabled={isDisabled}
      onPress={() => console.log("onBoarding")}
    >
      {/* input*/}
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "flex-start",
          marginTop: SIZES.padding * 2,
        }}
      >
        <FormInput
          label="Full Name"
          placeHolder="Enter Full Name"
          state={name}
          setState={setName}
          isValid={isNameValid}
          error="Incorrect Name"
        />
        <FormInput
          label="Email"
          placeHolder="Enter Email"
          state={email}
          setState={setEmail}
          formStyle={{
            marginTop: SIZES.padding,
          }}
          isValid={isEmailValid}
          error="Incorrect Email! Please check and enter again"
        />
      </View>
    </AuthLayout>
  );
};

export default UserOnBoard;
