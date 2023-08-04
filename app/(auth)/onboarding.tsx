// @ts-ignore
import { images } from "@/assets";
import { AppContainer, Button } from "@/components";
import Colors from "@/constants/Colors";
import metrics, { width } from "@/constants/metrics";
import { router } from "expo-router";
import React from "react";
import { View, Text, Image } from "react-native";

const Onboarding = () => {
  return (
    <AppContainer style={{ backgroundColor: Colors.white }}>
      <Image
        source={images.doctor}
        style={{
          width: width,
          height: width,
          alignSelf: "center",
          marginTop: metrics.spacing.large,
        }}
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: metrics.typography.heading2,
          textAlign: "center",
          color: Colors.darkGrey,
          padding: metrics.spacing.medium,
        }}
      >
        Find the best doctor and medicine for you.
      </Text>
      <Button
        onPress={() => router.push("/signin")}
        label="Get started"
        style={{
          width: "60%",
          alignSelf: "center",
          marginTop: metrics.spacing.large,
        }}
      />
    </AppContainer>
  );
};

export default Onboarding;
