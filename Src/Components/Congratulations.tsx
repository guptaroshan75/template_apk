import { View, Text, Modal, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import React from 'react';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { CommonActions } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';

interface Congratulations {
    isVisible: boolean;
    navigation: any
}

const Congratulations: React.FC<Congratulations> = ({ isVisible, navigation }) => {
    const handleLogin = () => {
        const resetAction = CommonActions.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
        navigation.dispatch(resetAction);
    };

    return (
        <React.Fragment>
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="default" />
            {isVisible && (
                <Modal animationType={'slide'} transparent={true} visible={isVisible}>
                    <BlurView style={styles.absolute} overlayColor={'#928F8F1A'} blurAmount={1} />

                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Image source={require('../image/congratulation.png')} style={styles.img} />
                            <Text style={styles.modelHeader}>Congratulations!</Text>
                            <Text style={styles.modelText}>Mr roshan gupta</Text>

                            <TouchableOpacity style={styles.signInBtn} activeOpacity={1} onPress={handleLogin}>
                                <Text style={styles.signInText}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
        </React.Fragment>
    );
};

export default Congratulations;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

    img: {
        alignSelf: 'center',
        resizeMode: 'contain',
    },

    modalContent: {
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        paddingVertical: responsiveHeight(1.4),
        borderRadius: responsiveHeight(2),
        elevation: responsiveHeight(1),
        justifyContent: 'flex-start',
        width: responsiveWidth(92),
    },

    modelHeader: {
        fontSize: responsiveFontSize(4),
        textAlign: 'center',
        color: '#E67F1E',
        fontWeight: '700',
        textTransform: 'capitalize',
        position: 'absolute',
        top: 51,
        left: 0,
        right: 0,
    },

    modelText: {
        fontSize: responsiveFontSize(2.1),
        textAlign: 'center',
        color: '#7A1E76',
        fontWeight: '700',
        textTransform: 'capitalize',
        position: 'absolute',
        top: 98,
        left: 0,
        right: 0,
    },

    signInBtn: {
        marginTop: responsiveHeight(1.6),
        marginBottom: responsiveHeight(7),
        paddingVertical: responsiveHeight(2),
        borderRadius: 50,
        width: responsiveWidth(72),
        alignSelf: 'center',
        backgroundColor: '#FEC54B',
    },

    signInText: {
        color: '#000',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 13,
        lineHeight: 24,
        textTransform: 'uppercase',
    },
});
