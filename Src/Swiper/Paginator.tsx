import { View, StyleSheet, useWindowDimensions, Animated } from 'react-native';
import React, { FC } from 'react';

interface Paginator {
    data: any[],
    scrollX: any
}

const Paginator: FC<Paginator> = ({ data, scrollX }) => {
    const { width } = useWindowDimensions();

    return (
        <View style={styles.container}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                const dotColor = scrollX.interpolate({
                    inputRange,
                    outputRange: ['#e3e1e1', '#12B76A', '#e3e1e1'],
                    extrapolate: 'clamp',
                });
                return <Animated.View key={i.toString()}
                    style={[styles.dot, { backgroundColor: dotColor }]}
                />;
            })}
        </View>
    );
};

export default Paginator;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 25,
    },

    dot: {
        height: 6,
        borderRadius: 5,
        backgroundColor: '#e3e1e1',
        marginHorizontal: 3,
        width: 23,
    },
});
