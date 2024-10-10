import { View, Text } from 'react-native';
import React, { FC } from 'react';
import CustomeDrawerHeader from '../components/CustomeDrawerHeader';

interface UserScreen {
    navigation: any
}

const UserScreen: FC<UserScreen> = ({ navigation }) => {
    return (
        <View>
            <CustomeDrawerHeader label={'UserScreen'} navigation={navigation} />

            <Text>UserScreen</Text>
        </View>
    );
};

export default UserScreen;
