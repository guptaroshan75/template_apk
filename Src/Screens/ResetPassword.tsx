import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { FC, useState } from 'react'
import ResetPasswordStyle from '../css/ResetPasswordStyle'
import CustomeHeader from '../components/CustomeHeader'
import CustomeInput from '../components/CustomeInput'
import CustomeAlert from '../components/CustomeAlert'

const ResetPassword: FC<{ navigation: any }> = ({ navigation }) => {
    const [userInfo, setUserInfo] = useState({
        password: '',
        c_password: ''
    });

    const [isVisible, setIsVisible] = useState(false);
    const [alertModelVisible, setAlertModelVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('')
    const [alertLable, setAlertLable] = useState('')

    const closeModel = () => {
        setAlertModelVisible(!alertModelVisible)
    }

    const handleResetPassword = async () => {
        const passwordValidation = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
        // if (userInfo?.password === '') {
        //     setAlertMessage('Password Is Required'); setAlertModelVisible(true); setAlertLable('Warning')
        //     return
        // }

        // if (userInfo?.c_password === '') {
        //     setAlertMessage('Confirm Password Is Required'); setAlertLable('Warning')
        //     setAlertModelVisible(true)
        //     return
        // }

        // if (!passwordValidation.test(userInfo?.password)) {
        //     setAlertMessage('Password Must Contain At Least 8 Characters, One Capital Letter, And One Special Character');
        //     setAlertModelVisible(true); setAlertLable('Warning');
        //     return;
        // }

        // if (userInfo?.password !== userInfo?.c_password) {
        //     setAlertMessage('New Password And Confirm Password Do Not Match');
        //     setAlertModelVisible(true); setAlertLable('Warning');
        //     return;
        // }
        try {
            setIsVisible(true)
        } catch (error) {
            return error
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={ResetPasswordStyle.container}>
                <CustomeHeader lable='Reset Password' navigation={navigation} />

                <ScrollView>
                    <Text style={ResetPasswordStyle.title}>Reset Password</Text>
                    <Text style={ResetPasswordStyle.description}>
                        Your new password must be different from the previously used password
                    </Text>

                    <CustomeInput label="New Password" placeholder="Enter Your New Password"
                        secureTextEntry value={userInfo.password}
                        onChangeText={text => setUserInfo({ ...userInfo, password: text })}
                    />

                    <Text style={ResetPasswordStyle.text}>Must be at least 8 character</Text>

                    <CustomeInput label="Confirm Password" placeholder="Enter Your Confirm Password"
                        secureTextEntry value={userInfo.c_password}
                        onChangeText={text => setUserInfo({ ...userInfo, c_password: text })}
                    />

                    <Text style={ResetPasswordStyle.text}>Both password must match</Text>
                </ScrollView>

                <CustomeAlert message={alertMessage} lable={alertLable} isVisible={alertModelVisible}
                    closeModel={closeModel}
                />

            </View>

            <TouchableOpacity style={ResetPasswordStyle.resetbtn}
                onPress={handleResetPassword}
            >
                <Text style={ResetPasswordStyle.resetText}>Verify Account</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ResetPassword