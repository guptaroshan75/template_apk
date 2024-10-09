import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import StackNavigator from './src/screens/StackNavigator';
import SplashScreen from 'react-native-splash-screen';
// import CustomeBottom from './src/components/CustomeBottom';

const App = () => {
    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000);
    });

    return (
        <NavigationContainer>
            <StackNavigator />
            {/* <CustomeBottom /> */}
        </NavigationContainer>
    );
};

export default App;
