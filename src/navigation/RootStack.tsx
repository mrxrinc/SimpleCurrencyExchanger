import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { StackScreenProps } from "@react-navigation/stack";
import { enableScreens } from "react-native-screens";
import { Home, CountryDetail } from "screens";
import { colors } from "theme";

export type RootStackParamList = {
  Home: undefined;
  CountryDetail: { name: string };
};

export type HomeProps = StackScreenProps<RootStackParamList, "Home">;
export type CountryDetailProps = StackScreenProps<
  RootStackParamList,
  "CountryDetail"
>;

enableScreens();
const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.white,
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CountryDetail" component={CountryDetail} />
    </Stack.Navigator>
  );
};

export default RootStack;
