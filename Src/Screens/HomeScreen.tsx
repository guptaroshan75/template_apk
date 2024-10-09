import { View, Text, Image } from 'react-native';
import { TouchableOpacity, StatusBar } from 'react-native';
import React, { FC } from 'react';
import HomeScreenStyle from '../css/HomeScreenStyle';

const HomeScreen: FC<{ navigation: any }> = () => {
    const handleLogout = async () => {

    };

    return (
        <View style={HomeScreenStyle.mainView}>
            <Image source={require('../image/onboarding.png')} style={HomeScreenStyle.image} />

            <View style={HomeScreenStyle.container}>
                <View style={HomeScreenStyle.border} />
                <Image source={require('../image/loginSuccess.png')} style={HomeScreenStyle.img} />
                <Text style={HomeScreenStyle.text}>Login Successful</Text>
                <Text style={HomeScreenStyle.subtitle}>
                    An event has been created and the invite has been sent to you on mail.
                </Text>

                <TouchableOpacity style={HomeScreenStyle.logoutbtn} onPress={handleLogout}>
                    <Text style={HomeScreenStyle.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>

            <StatusBar translucent backgroundColor={'transparent'} barStyle={'light-content'} />
        </View>
    );
};

export default HomeScreen;
