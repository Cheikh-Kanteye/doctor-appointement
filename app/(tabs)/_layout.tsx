import { images } from "@/assets";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import {
  Dimensions,
  ImageSourcePropType,
  Image,
  ColorValue,
} from "react-native";

const { width } = Dimensions.get("window");

const TabBarIcon = ({
  source,
  color,
}: {
  source: ImageSourcePropType;
  color: ColorValue;
}) => {
  return (
    <Image
      source={source}
      style={{ tintColor: color, width: 24, height: 24 }}
      resizeMode="contain"
    />
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.blue,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          justifyContent: "space-around",
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
          width,
          height: 60,
          backgroundColor: Colors.white,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon source={images.home} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon source={images.chat} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon source={images.cog} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon source={images.user} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
