import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const SignUpStyle = StyleSheet.create({
    maincontainer: {
        flex: 1,
    },

    container: {
        width: '100%',
        height: '57%',
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
        marginBottom: responsiveHeight(3),
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
        color: '#303030',
        textAlign: 'center',
        lineHeight: 24,
        marginVertical: 10,
        paddingHorizontal: responsiveWidth(14),
    },

    span: {
        color: '#FEC54B',
    },

    signUp: {
        marginTop: responsiveHeight(1.6),
        paddingVertical: responsiveHeight(2),
        borderRadius: 50,
        width: responsiveWidth(88),
        alignSelf: 'center',
        backgroundColor: '#FEC54B',
    },

    signText: {
        color: '#000',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
        textTransform: 'uppercase',
    },

    inputField: {
        marginTop: responsiveHeight(2),
        width: responsiveWidth(88),
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginRight: 'auto',
        marginLeft: 'auto',
        justifyContent: 'space-between',
    },

    inputContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        borderWidth: 1.3,
        borderColor: '#E67F1E',
        borderRadius: 30,
        paddingLeft: responsiveWidth(4),
        width: responsiveWidth(42),
    },

    texfield: {
        flex: 1,
        paddingVertical: responsiveHeight(1.2),
        color: '#000',
    },
});

export default SignUpStyle;
