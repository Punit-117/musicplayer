import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from '../screens/Homescreen';
import Splash from '../screens/Splash';



const stack = createNativeStackNavigator();

function AppNavigation(){
    return(
        <NavigationContainer>
            <stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}}>
            <stack.Screen name="Splash" component={Splash} />
                <stack.Screen name="Home" component={Homescreen} />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;