import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import StackNavigator from './src/screens/StackNavigator';
import SplashScreen from 'react-native-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

const App = () => {
    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000);
    });

    return (
        <NavigationContainer>
            <GestureHandlerRootView style={styles.container}>
                <StackNavigator />
            </GestureHandlerRootView>
        </NavigationContainer>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
