import { View, Text } from 'react-native';
import React, { FC } from 'react';
import CustomeDrawerHeader from '../components/CustomeDrawerHeader';

interface CategoryScreen {
  navigation: any
}

const CategoryScreen: FC<CategoryScreen> = ({ navigation }) => {
  return (
    <View>
      <CustomeDrawerHeader label={'CategoryScreen'} navigation={navigation} />

      <Text>CategoryScreen</Text>
    </View>
  );
};

export default CategoryScreen;
