import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import { useWindowDimensions, TouchableOpacity } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import Data from './Data';
import Paginator from './Paginator';
import LastPage from './LastPage';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SliderSwiperProps {
    item: any;
    scrollX: Animated.Value;
    index: number,
    scrollToNext: () => void,
    scrollToPre: () => void,
    navigation: any
}

const SliderSwiper: FC<SliderSwiperProps> = ({ item, scrollX, index, scrollToNext, navigation, scrollToPre }) => {
    const [showNextButton, setShowNextButton] = useState(false);
    const { width } = useWindowDimensions();

    useEffect(() => {
        if (index === Data.length - 1) {
            setShowNextButton(true);
        } else {
            setShowNextButton(false);
        }
    }, [index]);

    return (
        <SafeAreaView style={styles.main}>
            {index < 2 && (
                <TouchableOpacity onPress={scrollToPre}>
                    <Image source={require('../Image/arrow.png')} style={styles.back} />
                </TouchableOpacity>
            )}

            <View style={[styles.container, { width }]}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.introTitleStyle}>{item.title}</Text>
                {item.subtitel && (
                    <Text style={styles.introTextStyle}>{item.subtitel}</Text>
                )}
                <Text style={styles.introParaStyle}>{item.para}</Text>

                <Paginator data={Data} scrollX={scrollX} />
                {showNextButton ? (
                    <LastPage navigation={navigation} />
                ) : (
                    <TouchableOpacity style={styles.nextButton} onPress={scrollToNext} activeOpacity={1}>
                        <Text style={styles.nextText}>Next</Text>
                    </TouchableOpacity>
                )}
            </View>
        </SafeAreaView>
    );
};

export default SliderSwiper;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 35,
    },

    image: {
        justifyContent: 'center',
    },

    main: {
        display: 'flex',
        justifyContent: 'center',
    },

    back: {
        marginLeft: responsiveFontSize(3),
        marginTop: responsiveFontSize(3),
        height: responsiveHeight(8),
        resizeMode: 'contain',
    },

    introTextStyle: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        lineHeight: 24,
        fontWeight: '700',
        paddingVertical: 20,
    },

    introParaStyle: {
        fontSize: 14,
        color: '#000000B3',
        textAlign: 'center',
        lineHeight: 24,
        fontWeight: '400',
        paddingVertical: 14,
    },

    introTitleStyle: {
        fontSize: 28,
        color: '#000',
        textAlign: 'center',
        fontWeight: '700',
        paddingTop: 30,
        lineHeight: 35,
    },

    nextButton: {
        marginTop: responsiveHeight(3),
        backgroundColor: '#FEC54B',
        padding: 15,
        borderRadius: 50,
        width: responsiveWidth(88),
    },

    nextText: {
        color: '#000',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
        textTransform: 'uppercase',
    },
});
