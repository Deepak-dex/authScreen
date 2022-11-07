import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FONTS, SIZES } from "../../constants";

import Service from "../../components/Service";

import IconPhone from "../../../assets/icons/IconPhone.svg";
import IconBank from "../../../assets/icons/IconBank.svg";
import IconUser from "../../../assets/icons/IconUser.svg";
import IconUpi from "../../../assets/icons/IconUpi.svg";

export default function BankTransfer() {
  return (
    <View style={styles.main}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>All services</Text>
      </View>
      <View style={styles.serviceWrapper}>
        <View style={styles.serviceContainer}>
          <Service
            heading="Mobile Transfer"
            description="Transfer money via mobile number"
          >
            <IconPhone style={styles.serviceMainIcon} />
          </Service>
          <Service
            heading="Bank Transfer"
            description="Transfer money to another bank A/c"
          >
            <IconBank style={styles.serviceMainIcon} />
          </Service>
        </View>
        <View style={styles.serviceContainer}>
          <Service
            heading="Self A/c Transfer"
            description="Transfer Money to your own A/c"
          >
            <IconUser style={styles.serviceMainIcon} />
          </Service>
          <Service heading="UPI" description="Transfer money to another UPI Id">
            <IconUpi style={styles.serviceMainIcon} />
          </Service>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 100,
  },
  headingContainer: {
    alignItems: "center",
  },
  heading: {
    ...FONTS.subH1,
  },
  serviceWrapper: {
    padding: SIZES.base,
  },
  serviceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  serviceMainIcon: {
    height: 40,
    width: 40,
  },
});
