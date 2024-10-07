import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import React, { FC } from 'react';
import { CommonActions } from '@react-navigation/native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

interface LastPage {
    navigation: any
}

const LastPage: FC<LastPage> = ({ navigation }) => {
    const handleLogin = () => {
        const resetAction = CommonActions.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
        navigation.dispatch(resetAction);
    };

    const handleSignUp = () => {
        const resetAction = CommonActions.reset({
            index: 0,
            routes: [{ name: 'SignUp' }],
        });
        navigation.dispatch(resetAction);
    };

    return (
        <React.Fragment>
            <TouchableOpacity style={styles.signUpButton} activeOpacity={1} onPress={handleSignUp}>
                <Text style={styles.signUpText}>Create an account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} activeOpacity={1} onPress={handleLogin}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
        </React.Fragment>
    );
};

export default LastPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },

    signUpButton: {
        marginTop: responsiveHeight(3),
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 50,
        width: responsiveWidth(88),
    },

    signUpText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
        textTransform: 'uppercase',
    },

    loginButton: {
        marginTop: responsiveHeight(3),
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 50,
        width: responsiveWidth(88),
        borderWidth: 2,
        borderColor: '#000',
    },

    loginText: {
        color: '#000',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
        textTransform: 'uppercase',
    },
});
