import { View, Text, StyleSheet, Image } from 'react-native';
import React, { FC } from 'react';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

interface CustomeCount {
    imagepath: any,
    label: string,
    count: number | undefined,
}
const CustomeCount: FC<CustomeCount> = ({ label, count, imagepath }) => {

    return (
        <View style={styles.container}>
            <View style={styles.imgcontainer}>
                <Image source={imagepath} style={styles.img} />
            </View>

            <Text style={styles.border}> </Text>

            <View style={styles.textcontainer}>
                <Text style={styles.title}> {label} </Text>
                <Text style={styles.title}> {count} </Text>
            </View>
        </View>
    );
};

export default CustomeCount;

const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(92),
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: responsiveHeight(1.8),
        paddingVertical: responsiveHeight(1.8),
        marginBottom: responsiveHeight(2),
        flexDirection: 'row',
        alignItems: 'center',
    },

    border: {
        borderLeftWidth: 1,
        borderLeftColor: '#00000070',
        height: responsiveHeight(8),
        marginRight: responsiveWidth(4),
    },

    title: {
        fontSize: responsiveFontSize(2.4),
        color: '#000000',
    },

    textcontainer: {
        flexDirection: 'column',
    },

    imgcontainer: {
        backgroundColor: '#39A7FF',
        padding: responsiveHeight(2),
        borderRadius: responsiveWidth(50),
        marginHorizontal: responsiveWidth(5),
    },

    img: {
        width: 28,
        height: 28,
        tintColor: '#fff',
    },
});
