import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FONTS, SIZES } from "../../constants";

import Service from "../../components/Service";

import IconChart from "../../../assets/icons/IconChart.svg";
import IconCoinPot from "../../../assets/icons/IconCoinPot.svg";
import IconCalendar from "../../../assets/icons/IconCalendar.svg";

export default function Investment() {
  return (
    <View style={styles.main}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>All services</Text>
      </View>
      <View style={styles.serviceWrapper}>
        <View style={styles.serviceContainer}>
          <Service
            heading="Mutual Funds"
            description="Browse and invest in different types of mutual funds"
          >
            <IconChart style={styles.serviceMainIcon} />
          </Service>
          <Service
            heading="National Pension Scheme"
            description="Invest in your pension scheme"
          >
            <IconCoinPot style={styles.serviceMainIcon} />
          </Service>
        </View>
        <View style={styles.serviceContainer}>
          <Service heading="Gold" description="Buy and invest in gold now">
            <IconCoinPot style={styles.serviceMainIcon} />
          </Service>
          <Service heading="FMPP" description="Invest in Fixed Maturity P2P">
            <IconCalendar style={styles.serviceMainIcon} />
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
    marginTop: SIZES.radius,
  },
});
