import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './component/HomePage';
import PropsTest1 from './component/PropsTest1';
import PropsTest2 from './component/PropsTest2';
import RegisterPage from './component/RegisterPage';

const Stack = createNativeStackNavigator();

const App = () =>{

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomePage" component={HomePage} options={{title:'My Home'}}></Stack.Screen>
                <Stack.Screen name="PropsTest1" component={PropsTest1} options={{title:'Props Test Page'}}></Stack.Screen>
                <Stack.Screen name="PropsTest2" component={PropsTest2} options={{title:'Props Test Page'}}></Stack.Screen>
                <Stack.Screen name="RegisterPage" component={RegisterPage} options={{title:'Register'}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default App;
