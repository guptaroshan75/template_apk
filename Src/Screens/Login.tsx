import { View, Text, Image, SafeAreaView } from 'react-native';
import { TouchableOpacity, StatusBar } from 'react-native';
import React, { FC, useState } from 'react';
import LoginStyle from '../css/LoginStyle';
import CustomeInput from '../components/CustomeInput';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login: FC<{ navigation: any }> = () => {
    const [userInfo, setUserInfo] = useState({
        email: '', password: '',
    });
    return (
        <SafeAreaView style={LoginStyle.maincontainer}>
            <Image source={require('../image/login.png')} style={LoginStyle.image} />

            <View style={LoginStyle.container}>
                <View style={LoginStyle.mainHeader}>
                    <Text style={LoginStyle.heading}>Sign In</Text>
                    <Ionicons name={'close-circle'} size={35} color="#000" style={LoginStyle.close_icon} />
                </View>

                <CustomeInput placeholder="Enter Your Email-Id"
                    value={userInfo.email}
                    onChangeText={text => setUserInfo({ ...userInfo, email: text })}
                />

                <CustomeInput placeholder="Enter Your Password"
                    value={userInfo.password} secureTextEntry
                    onChangeText={text => setUserInfo({ ...userInfo, password: text })}
                />

                <Text style={LoginStyle.subtitle}>
                    Forgot Password?
                </Text>

                <TouchableOpacity style={LoginStyle.signInBtn} activeOpacity={1}>
                    <Text style={LoginStyle.signInText}>Sign In</Text>
                </TouchableOpacity>
            </View>

            <StatusBar translucent backgroundColor={'transparent'} barStyle={'light-content'} />
        </SafeAreaView>
    );
};

export default Login;
