import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomeDrawerStyle from '../css/CustomeDrawerStyle';
import { CommonActions } from '@react-navigation/native';

const CustomDrawer = (props: any) => {

    const handleLogout = async () => {
        Alert.alert(
            'Confirm Logout',
            'Are You Sure You Want To LogOut',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Logout',
                    onPress: async () => {
                        try {
                            const resetAction = CommonActions.reset({
                                index: 0,
                                routes: [{ name: 'Login' }],
                            });
                            props.navigation.dispatch(resetAction);
                        } catch (error) {
                            console.log(error);
                        }
                    },
                },
            ],
            { cancelable: false }
        );

    };

    return (
        <View style={styles.mainContainer}>
            <DrawerContentScrollView {...props}>
                <View style={CustomeDrawerStyle.container}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}
                        style={CustomeDrawerStyle.imgcontainer}
                    >

                        <Image source={require('../image/user.png')} style={CustomeDrawerStyle.img} />
                    </TouchableOpacity>

                    <View>
                        <Text style={CustomeDrawerStyle.name}>{'Roshan'}</Text>
                        <Text style={CustomeDrawerStyle.email}>{'rg71243@gmail.com'}</Text>
                    </View>
                </View>

                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <TouchableOpacity style={CustomeDrawerStyle.footer} onPress={handleLogout}>
                <View style={styles.container}>
                    <MaterialCommunityIcons name="logout" size={23} color="#000" />
                    <Text style={CustomeDrawerStyle.logtext}> Log Out </Text>
                </View>
            </TouchableOpacity>
        </View>

    );
};

export default CustomDrawer;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },

    container: {
        flexDirection: 'row',
    },
});
