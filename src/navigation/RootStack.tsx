import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { enableScreens } from "react-native-screens";
import { Home, CountryDetail } from "screens";
import { colors } from "theme";

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
