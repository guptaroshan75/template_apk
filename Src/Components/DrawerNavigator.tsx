import React, { FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import BottomNavigator from './BottomNavigator';
import { Image, StyleSheet } from 'react-native';
import BagScreen from '../screens/BagScreen';
import CategoryScreen from '../screens/CategoryScreen';
import UserScreen from '../screens/UserScreen';

interface DrawerNavigator {
    navigation: any
}

const Drawer = createDrawerNavigator();

const DrawerNavigator: FC<DrawerNavigator> = () => {
    const getTintColor = (focused: boolean) => {
        return focused ? '#FEC54B' : '#000';
    };
    const renderCustomDrawer = (props: any) => <CustomDrawer {...props} />;
    const renderDrawerIcon = (iconSource: any, focused: boolean) => (
        <Image
            source={iconSource}
            style={[styles.img, { tintColor: getTintColor(focused) }]}
        />
    );

    return (
        <Drawer.Navigator drawerContent={renderCustomDrawer} screenOptions={{
            headerShown: false, drawerLabelStyle: { fontSize: 14 },
            drawerActiveTintColor: '#FEC54B',
        }}>
            <>
                <Drawer.Screen name="Dashboard" component={BottomNavigator}
                    options={{
                        drawerIcon: ({ focused }) => renderDrawerIcon(require('../Icons/dashboard.png'), focused),
                    }}
                />

                <Drawer.Screen name="BagScreen" component={BagScreen}
                    options={{
                        drawerIcon: ({ focused }) => renderDrawerIcon(require('../Icons/accountant.png'), focused),
                    }}
                />

                <Drawer.Screen name="CategoryScreen" component={CategoryScreen}
                    options={{
                        drawerIcon: ({ focused }) => renderDrawerIcon(require('../Icons/home.png'), focused),
                    }}
                />

                <Drawer.Screen name="UserScreen" component={UserScreen}
                    options={{
                        drawerIcon: ({ focused }) => renderDrawerIcon(require('../Icons/home.png'), focused),
                    }}
                />
            </>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
    img: {
        width: 28,
        height: 28,
    },
});
