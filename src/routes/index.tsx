import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { LotteryProvider } from "../contexts";
import { MegaSenaScreen, QuinaScreen, TimemaniaScreen } from "../pages";

const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <LotteryProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Mega-sena">
          <Drawer.Screen name="Mega-sena" component={MegaSenaScreen} />
          <Drawer.Screen name="Quina" component={QuinaScreen} />
          <Drawer.Screen name="Timemania" component={TimemaniaScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </LotteryProvider>
  );
};

export default Routes;