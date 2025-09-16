import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import QandA from "./screens/QandA";

const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator initialRouteName="식품 안전 나라">
      <Stack.Screen name="식품 안전 나라" component={QandA} />
    </Stack.Navigator>
  );
}
function Navigation() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}

export default Navigation;
