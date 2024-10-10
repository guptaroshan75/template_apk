import { View, Text, StyleSheet, Image } from 'react-native';
import React, { FC } from 'react';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { TouchableOpacity } from 'react-native';

interface CustomeDrawerHeader {
    navigation: any,
    label: string
}

const CustomeDrawerHeader: FC<CustomeDrawerHeader> = ({ navigation, label }) => {
    return (
        <View style={styles.headder}>
            <TouchableOpacity style={styles.menuBtn}
                onPress={() => { navigation.openDrawer(); }}
            >
                <Image source={require('../image/menu.png')} style={styles.toggle} />
            </TouchableOpacity>

            <View style={styles.label}>
                <Text style={styles.headerText}>{label}</Text>
            </View>
        </View>
    );
};

export default CustomeDrawerHeader;

const styles = StyleSheet.create({
    headder: {
        width: '100%',
        backgroundColor: '#FEC54B',
        paddingVertical: responsiveHeight(1.5),
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: responsiveHeight(2.5),
    },

    menuBtn: {
        marginLeft: 16,
    },

    headerText: {
        marginLeft: -40,
        fontSize: responsiveFontSize(3),
        fontWeight: '400',
        color: '#fff',
    },

    toggle: {
        width: 30,
        height: 35,
        tintColor: '#fff',
    },

    label: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});
