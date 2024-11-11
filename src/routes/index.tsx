import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LotteryProvider } from "../contexts";
import { MegaSenaScreen, QuinaScreen, TimemaniaScreen, HomeScreen } from "../pages";
import { RootStackParamList } from "../types/rootStack";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const LotteryDrawer = () => (
  <Drawer.Navigator initialRouteName="Mega-sena">
    <Drawer.Screen name="Mega-sena" component={MegaSenaScreen} />
    <Drawer.Screen name="Quina" component={QuinaScreen} />
    <Drawer.Screen name="Timemania" component={TimemaniaScreen} />
  </Drawer.Navigator>
);

const Routes = () => {
  return (
    <LotteryProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LotteryDrawer"
            component={LotteryDrawer}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </LotteryProvider>
  );
};

export default Routes;
