import { View, KeyboardTypeOptions, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { FC, useState } from 'react';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface CustomeInput {
    placeholder: string;
    KeyboardType?: KeyboardTypeOptions;
    secureTextEntry?: boolean;
    value: string | undefined;
    onChangeText: (text: string) => void;
}

const CustomeInput: FC<CustomeInput> = ({
    placeholder, KeyboardType, secureTextEntry = false, value, onChangeText,
}) => {
    const [secure, setSecure] = useState(secureTextEntry);

    const toggleSecureEntry = () => {
        setSecure(!secure);
    };

    return (
        <View style={styles.inputField}>
            <View style={styles.inputContainer}>
                <TextInput placeholder={placeholder} placeholderTextColor={'#878787'}
                    style={styles.texfield} keyboardType={KeyboardType || 'default'}
                    secureTextEntry={secure} value={String(value)} onChangeText={onChangeText}
                />

                {secureTextEntry && (
                    <TouchableOpacity onPress={toggleSecureEntry} style={styles.toggleButton}>
                        <FontAwesome5 name={secure ? 'eye-slash' : 'eye'} size={18} color="#000" />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default CustomeInput;

const styles = StyleSheet.create({
    inputField: {
        marginTop: responsiveHeight(2.3),
        width: responsiveWidth(88),
        textAlign: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
    },

    inputContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        borderWidth: 1.3,
        borderColor: '#E67F1E',
        borderRadius: 30,
        paddingLeft: responsiveWidth(4),
    },

    texfield: {
        flex: 1,
        paddingVertical: responsiveHeight(1.8),
        color: '#000',
    },

    toggleButton: {
        alignSelf: 'center',
        paddingHorizontal: responsiveWidth(4.5),
    },
});
