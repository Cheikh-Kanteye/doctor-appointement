import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="onboarding" />
      <Stack.Screen
        name="signin"
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <Stack.Screen name="signup" />
    </Stack>
  );
};

export default AuthLayout;
