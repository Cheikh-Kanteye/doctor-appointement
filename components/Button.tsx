import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import metrics from "@/constants/metrics";
import Colors from "@/constants/Colors";

interface ButtonProps extends TouchableOpacityProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        {
          paddingHorizontal: metrics.spacing.large,
          paddingVertical: metrics.spacing.regular * 1.5,
          borderRadius: 15,
          backgroundColor: Colors.blue,
          justifyContent: "center",
          alignItems: "center",
        },
        props.style,
      ]}
    >
      <Text
        style={{
          fontSize: metrics.typography.bodyText,
          fontWeight: "600",
          color: Colors.white,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
