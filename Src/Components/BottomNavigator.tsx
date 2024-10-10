// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import React from 'react';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// // import Ionicons from 'react-native-vector-icons/Ionicons';
// // import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
// import { responsiveFontSize } from 'react-native-responsive-dimensions';
// import HomeScreen from '../screens/HomeScreen';

// const Bottom = createBottomTabNavigator();

// interface BottomNavigator {
//     navigation: any
// }

// const BottomNavigator: React.FC<BottomNavigator> = () => {

//     return (
//         <Bottom.Navigator screenOptions={{
//             tabBarLabelStyle: { fontSize: responsiveFontSize(2) },
//             tabBarActiveTintColor: '#39A7FF', tabBarInactiveTintColor: 'gray',
//             tabBarStyle: { position: 'relative', height: 55 },
//             // tabBarBackground: () => (
//             //     <ImageBackground source={require('../Images/cycle_run.png')} style={{ flex: 1 }} />
//             // ),
//         }}>
//             <Bottom.Screen name={'HomeScreen'} component={HomeScreen} options={{
//                 headerShown: false, tabBarIcon: ({ color }) => (
//                     <MaterialCommunityIcons name='view-dashboard' color={color} size={28} />
//                 ),
//             }} />
//         </Bottom.Navigator>
//     );
// };

// export default BottomNavigator;


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import CustomeBottom from '../components/CustomeBottom';
import BagScreen from '../screens/BagScreen';
import CategoryScreen from '../screens/CategoryScreen';
import UserScreen from '../screens/UserScreen';
import DashBoard from '../screens/DashBoard';

const Bottom = createBottomTabNavigator();

const BottomNavigator: React.FC = () => {
    const screenOptions = {
        headerShown: false,
    };

    const renderCustomBottom = (props: any) => <CustomeBottom {...props} />;

    return (
        <Bottom.Navigator screenOptions={screenOptions} tabBar={renderCustomBottom}>
            <Bottom.Screen name="Home" component={DashBoard} />
            <Bottom.Screen name="BagScreen" component={BagScreen} />
            <Bottom.Screen name="CategoryScreen" component={CategoryScreen} />
            <Bottom.Screen name="UserScreen" component={UserScreen} />
        </Bottom.Navigator>
    );
};

export default BottomNavigator;
