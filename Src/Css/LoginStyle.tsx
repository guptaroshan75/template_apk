import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const LoginStyle = StyleSheet.create({
    maincontainer: {
        flex: 1,
    },

    container: {
        width: '100%',
        height: '48%',
        backgroundColor: '#FAFEFC',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: responsiveHeight(3.8),
        borderTopRightRadius: responsiveHeight(3.8),
    },

    mainHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: responsiveWidth(88),
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 20,
        marginBottom: responsiveHeight(5),
    },

    heading: {
        fontSize: responsiveFontSize(3),
        fontWeight: '600',
        color: '#000',
        textAlign: 'center',
        paddingLeft: responsiveWidth(2.6),
    },

    close_icon: {
        alignSelf: 'center',
        justifyContent: 'center',
    },

    image: {
        justifyContent: 'center',
        resizeMode: 'contain',
    },

    subtitle: {
        fontSize: responsiveFontSize(2.2),
        fontWeight: '400',
        color: '#E67F1E',
        textAlign: 'center',
        lineHeight: 24,
        marginVertical: 10,
        paddingHorizontal: responsiveWidth(14),
    },

    signInBtn: {
        marginTop: responsiveHeight(1.6),
        paddingVertical: responsiveHeight(2),
        borderRadius: 50,
        width: responsiveWidth(88),
        alignSelf: 'center',
        backgroundColor: '#FEC54B',
    },

    signInText: {
        color: '#000',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
        textTransform: 'uppercase',
    },
});

export default LoginStyle;
