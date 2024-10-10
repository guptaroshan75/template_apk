import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const CustomeSideDrawerStyle = StyleSheet.create({
    container: {
        backgroundColor: '#FEC54B',
        borderTopLeftRadius: responsiveWidth(8),
        borderBottomRightRadius: responsiveWidth(8),
        paddingVertical: responsiveHeight(1.8),
        marginHorizontal: responsiveHeight(1.5),
        flexDirection: 'row',
        alignItems: 'center',
    },

    imgcontainer: {
        backgroundColor: '#fff',
        borderRadius: responsiveWidth(50),
        marginHorizontal: responsiveWidth(2),
    },

    img: {
        width: 55,
        height: 55,
        borderRadius: 100,
    },

    name: {
        fontSize: responsiveFontSize(2.4),
        color: '#fff',
        fontWeight: '500',
        textTransform: 'capitalize',
    },

    email: {
        color: '#fff',
    },

    iconlogo: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 15,
        padding: 14,
        backgroundColor: '#f6f6f6',
    },

    icontext: {
        alignSelf: 'center',
        marginLeft: 8,
        color: '#000',
        fontWeight: '500',
    },

    footer: {
        backgroundColor: '#FEC54B',
        padding: responsiveHeight(2.2),
    },

    logtext: {
        fontSize: responsiveFontSize(2),
        color: '#000',
        marginLeft: responsiveHeight(1.4),
    },
});

export default CustomeSideDrawerStyle;
