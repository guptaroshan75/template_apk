import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import { StyleSheet, View } from 'react-native';
import OnboardingSwiper from '../Swiper/OnboardingSwiper';
import SignUp from './SignUp';
import EmailVerification from './EmailVerification';
import HomeScreen from './HomeScreen';
import ResetPassword from './ResetPassword';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <View style={styles.container}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="OnboardingSwiper" component={OnboardingSwiper} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="EmailVerification" component={EmailVerification} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
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
