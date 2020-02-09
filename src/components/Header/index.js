import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import Logo from '~/../assets/images/logo.png';

import AntIcons from 'react-native-vector-icons/AntDesign'

export default function Header() {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />

            <View style={styles.cart}>
                <View style={styles.budget}>
                    <Text style={styles.budgetNumber}>3</Text>
                </View>
                <AntIcons name="shoppingcart" size={25} style={styles.icon} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    logo: {
        width: 185,
        height: 24,
    },
    icon: {
        color: '#FFFFFFFF',
    },
    cart: {
        flexDirection: 'row-reverse',
    },
    budget: {
        backgroundColor: '#7159C1',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 90,
        width: 16,
        height: 16,
    },
    budgetNumber: {
        textAlign: 'center',
        color: '#FFFFFFFF',
        fontSize: 12
    }
});
