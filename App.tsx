import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello Test World</Text>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 23,
    },
});
