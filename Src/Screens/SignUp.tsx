import { View, Text, Image, TextInput, SafeAreaView } from 'react-native';
import { TouchableOpacity, StatusBar } from 'react-native';
import React, { FC, useState } from 'react';
import SignUpStyle from '../css/SignUpStyle';
import CustomeInput from '../components/CustomeInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Congratulations from '../components/Congratulations';

const SignUp: FC<{ navigation: any }> = ({ navigation }) => {
    const [userInfo, setUserInfo] = useState({
        email: '', username: '', password: '',
    });

    const [isVisible, setIsVisible] = useState(false);

    const handleSignUp = () => {
        setIsVisible(true);
    };

    return (
        <SafeAreaView style={SignUpStyle.maincontainer}>
            <Image source={require('../image/variety.png')} style={SignUpStyle.image} />

            <View style={SignUpStyle.container}>
                <View style={SignUpStyle.mainHeader}>
                    <Text style={SignUpStyle.heading}>Create your account</Text>
                    <Ionicons name={'close-circle'} size={35} color="#000" style={SignUpStyle.close_icon} />
                </View>

                <View style={SignUpStyle.inputField}>
                    <View style={SignUpStyle.inputContainer}>
                        <TextInput placeholder={'First Name'} placeholderTextColor={'#878787'}
                            style={SignUpStyle.texfield}
                            value={''}
                        />
                    </View>

                    <View style={SignUpStyle.inputContainer}>
                        <TextInput placeholder={'Last Name'} placeholderTextColor={'#878787'}
                            style={SignUpStyle.texfield}
                            value={''}
                        />
                    </View>
                </View>

                <CustomeInput placeholder="Enter Your Email-Id"
                    value={userInfo.email}
                    onChangeText={text => setUserInfo({ ...userInfo, email: text })}
                />

                <CustomeInput placeholder="Enter Your Password"
                    value={userInfo.password} secureTextEntry
                    onChangeText={text => setUserInfo({ ...userInfo, password: text })}
                />

                <Text style={SignUpStyle.subtitle}>
                    By tapping Sign up you accept all <Text style={SignUpStyle.span}>terms </Text>
                    and <Text style={SignUpStyle.span}>condition</Text>
                </Text>

                <TouchableOpacity style={SignUpStyle.signUp} activeOpacity={1} onPress={handleSignUp}>
                    <Text style={SignUpStyle.signText}>Create an account</Text>
                </TouchableOpacity>
            </View>

            <StatusBar translucent backgroundColor={'transparent'} barStyle={'light-content'} />

            <Congratulations isVisible={isVisible} navigation={navigation} />
        </SafeAreaView>
    );
};

export default SignUp;
