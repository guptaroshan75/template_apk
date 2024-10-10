import { View, Text } from 'react-native';
import React, { FC } from 'react';
import CustomeDrawerHeader from '../components/CustomeDrawerHeader';

interface BagScreen {
  navigation: any
}

const BagScreen: FC<BagScreen> = ({ navigation }) => {
  return (
    <View>
      <CustomeDrawerHeader label={'BagScreen'} navigation={navigation} />

      <Text>BagScreen</Text>
    </View>
  );
};

export default BagScreen;
