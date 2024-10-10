import React, { FC } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import CustomeDrawerHeader from '../components/CustomeDrawerHeader';
import CustomeCount from '../components/CustomeCount';

interface DashBoard {
    navigation: any,
}

const DashBoard: FC<DashBoard> = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <CustomeDrawerHeader label={'Dashboard'} navigation={navigation} />
            <TouchableOpacity onPress={() => navigation.navigate('Manage Manager')}>
                <CustomeCount label={'Total Manager'}
                    count={0}
                    imagepath={`${require('../Icons/accountant.png')}`}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Manage Room')}>
                <CustomeCount label={'Total Room'} count={0}
                    imagepath={`${require('../Icons/home.png')}`}
                />
            </TouchableOpacity>
        </View>
    );
};

export default DashBoard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
