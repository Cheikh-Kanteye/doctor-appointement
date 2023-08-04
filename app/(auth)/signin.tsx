import {
  View,
  Text,
  TextInputProps,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
//@ts-ignore
import { useEffect, useState } from "react";
import { AppContainer, Button } from "@/components";
import Colors from "@/constants/Colors";
import { images } from "@/assets";
import metrics, { height, width } from "@/constants/metrics";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface InputProps extends TextInputProps {
  name: keyof typeof Feather.glyphMap;
  isSecure?: boolean;
}

const Input = ({ name, isSecure, ...props }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        height: 50,
        marginTop: metrics.spacing.medium,
        width: width - metrics.spacing.medium * 2,
      }}
    >
      <Feather
        name={name}
        size={22}
        color={isFocused ? Colors.darkGrey : Colors.lightGrey}
      />
      <View
        style={{
          flex: 1,
          borderBottomWidth: 1,
          height: "100%",
          borderBottomColor: isFocused ? Colors.darkGrey : Colors.lightGrey,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TextInput
          style={{
            flex: 1,
            height: "100%",
            fontSize: metrics.typography.bodyText,
            color: Colors.darkGrey,
          }}
          secureTextEntry={!showPassword}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {isSecure && (
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => setShowPassword && setShowPassword(!showPassword)}
          >
            <Feather
              name={showPassword ? "eye-off" : "eye"}
              size={22}
              color={isFocused ? Colors.darkGrey : Colors.lightGrey}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const Signin = () => {
  const [keyboardIsvisible, setKeyboardIsvisible] = useState<number>(0);
  const animatedValue = useSharedValue<number>(keyboardIsvisible);
  const keyboardHeight = useSharedValue(0);
  const imageHeight = useSharedValue(width * 0.7);
  const imageOpacity = useSharedValue(1);

  const derived = useDerivedValue(() => {
    return withTiming(animatedValue.value * keyboardIsvisible);
  });

  const onKeyboardShow = (event: any) => {
    keyboardHeight.value = event.endCoordinates.height;
    imageHeight.value = withTiming(width * 0.5, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });
    imageOpacity.value = withTiming(0, {
      duration: 250,
      easing: Easing.inOut(Easing.ease),
    });
  };

  const onKeyboardHide = () => {
    keyboardHeight.value = 0;
    imageHeight.value = withTiming(width * 0.7, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });
    imageOpacity.value = withTiming(1, {
      duration: 250,
      easing: Easing.inOut(Easing.ease),
    });
  };

  const imageStyle = useAnimatedStyle(() => {
    return {
      height: imageHeight.value,
      opacity: imageOpacity.value,
    };
  });

  useEffect(() => {
    const keyboardWillShowSub = Keyboard.addListener(
      "keyboardDidShow",
      onKeyboardShow
    );
    const keyboardWillHideSub = Keyboard.addListener(
      "keyboardDidHide",
      onKeyboardHide
    );

    return () => {
      keyboardWillShowSub.remove();
      keyboardWillHideSub.remove();
    };
  }, []);

  return (
    <AppContainer style={{ backgroundColor: Colors.white }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={"position"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 40 : 0}
      >
        <Animated.Image
          source={images.signin}
          style={[
            {
              width: width * 0.7,
              height: width * 0.7,
              alignSelf: "center",
              marginTop: -metrics.spacing.medium,
              // opacity: keyboardIsvisible ? 0 : 1,
            },
            imageStyle,
          ]}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: metrics.typography.heading2,
            color: Colors.darkGrey,
            fontWeight: "bold",
          }}
        >
          Sign in
        </Text>
        <Input
          name="at-sign"
          placeholder="Enter email address"
          keyboardType="email-address"
        />
        <Input name="lock" placeholder="Enter password" isSecure />
        <TouchableOpacity
          style={{
            alignSelf: "flex-end",
            marginVertical: metrics.spacing.medium,
          }}
        >
          <Text
            style={{
              fontSize: metrics.typography.subtext,
              fontWeight: "bold",
              color: Colors.blue,
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <Button label="Sign in" />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: metrics.spacing.medium,
            paddingHorizontal: metrics.spacing.small,
          }}
        >
          <View
            style={{ flex: 1, height: 1, backgroundColor: Colors.lightGrey }}
          />
          <Text
            style={{
              paddingHorizontal: metrics.spacing.regular,
              color: Colors.lightGrey,
              fontWeight: "bold",
            }}
          >
            OR
          </Text>
          <View
            style={{ flex: 1, height: 1, backgroundColor: Colors.lightGrey }}
          />
        </View>
      </KeyboardAvoidingView>
    </AppContainer>
  );
};

export default Signin;
