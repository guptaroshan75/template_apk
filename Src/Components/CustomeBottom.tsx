// import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import React from 'react';

// const CustomeBottom = () => {
//     return (
//         <View style={styles.mainView}>
//             <View style={styles.container}>
//                 <TouchableOpacity style={styles.mainBtn}>
//                     <Image source={require('../image/home.png')} style={styles.img} />
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.mainBtn}>
//                     <Image source={require('../image/bag.png')} style={styles.img} />
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.mainBtn}>
//                     <Image source={require('../image/category.png')} style={styles.img} />
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.mainBtn}>
//                     <View style={styles.imgContainer}>
//                         <Image source={require('../image/user.png')} style={styles.img} />
//                     </View>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// export default CustomeBottom;

// const styles = StyleSheet.create({
//     mainView: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },

//     container: {
//         width: '100%',
//         height: 70,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//     },

//     mainBtn: {
//         width: '25%',
//         height: '100%',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },

//     imgContainer: {
//         width: '90%',
//         height: '50%',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 20,
//         backgroundColor: '#ffaa00',

//     },

//     img: {
//         width: 30,
//         // height: 30,
//         resizeMode: 'cover',
//         // tintColor: '#000',
//     },
// });



import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const tabItems = [
    { name: 'HomeScreen', label: 'Home', image: require('../image/home.png') },
    { name: 'BagScreen', label: 'Bag', image: require('../image/bag.png') },
    { name: 'CategoryScreen', label: 'Category', image: require('../image/category.png') },
    { name: 'UserScreen', label: 'User', image: require('../image/user.png') },
];

const CustomeBottom: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
    const isTabFocused = (tabState: any, index: number) => {
        return tabState.index === index;
    };

    const handleTabPress = (nav: any, route: any, isFocused: boolean) => {
        const event = nav.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
            nav.navigate(route.name);
        }
    };

    return (
        <View style={styles.container}>
            {tabItems.map((tabItem, index) => {
                const isFocused = isTabFocused(state, index);

                return (
                    <TouchableOpacity key={index} accessibilityRole="button" style={styles.mainBtn}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        onPress={() => handleTabPress(navigation, tabItem, isFocused)}
                    >
                        <View style={[styles.iconLabelContainer, isFocused ?
                            styles.activeBackground : styles.defaultBackground]}
                        >
                            <Image source={tabItem?.image} style={[
                                styles.img, isFocused ? styles.imgFocused : '']}
                            />
                            {isFocused && (
                                <Text style={[styles.label, isFocused ? styles.focusedLabel : styles.defaultLabel]}>
                                    {tabItem.label}
                                </Text>
                            )}
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default CustomeBottom;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        height: 70,
        alignItems: 'center',
    },

    mainBtn: {
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    img: {
        width: 24,
        height: 24,
        // resizeMode: 'contain',
    },

    iconLabelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    defaultBackground: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 20,
    },

    activeBackground: {
        backgroundColor: '#ffaa00',
        padding: 10,
        borderRadius: 20,
    },

    label: {
        fontSize: 14,
        marginLeft: 8,
    },

    defaultLabel: {
        color: '#000',
    },

    focusedLabel: {
        color: '#fff',
        fontWeight: 'bold',
    },

    imgFocused: {
        tintColor: '#fff',
    },
});
