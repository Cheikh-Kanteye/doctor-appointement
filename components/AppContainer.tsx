import { View, Text, ViewStyle } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import metrics from "@/constants/metrics";
import Colors from "@/constants/Colors";

interface AppContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const AppContainer = ({ children, style }: AppContainerProps) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: metrics.spacing.medium,
        backgroundColor: Colors.lightGray,
        ...style,
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default AppContainer;
