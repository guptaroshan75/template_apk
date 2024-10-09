import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import { StyleSheet, View } from 'react-native';
import OnboardingSwiper from '../swiper/OnboardingSwiper';
import SignUp from './SignUp';
import BottomNavigator from '../components/BottomNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <View style={styles.container}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="OnboardingSwiper" component={OnboardingSwiper} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
            </Stack.Navigator>
        </View>
    );
};

export default StackNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
