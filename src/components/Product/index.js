import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Product() {
    return (
        <View style={styles.product}>
            <Image source={{ uri: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSx2BBZx0cBIcgoIoLJ_OGikcMMraz9U3e2YuiKgpJ6mP7B6P3pFTfdiL4rkSsUSflmWTyS-FGfphP_f0TeHyKE2SpigrsSak1IdLkocyyY9sjMTCRnmxenGws&usqp=CAE' }} style={styles.image} />
            <Text style={styles.name}>Tênis de Caminhada Leve Confortável</Text>
            <Text style={styles.price}>R$ 179,90</Text>
            <TouchableOpacity style={styles.addButton}>
                <View style={styles.countProduct}>
                    <Text style={styles.productAmount}>1</Text>
                </View>
                <View style={styles.addContainer}>
                    <Text style={styles.addText}>Adicionar</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    product: {
        width: 220,
        height: 358,
        padding: 15,
        backgroundColor: '#FFFFFFFF',
        borderRadius: 5,
        margin: 15
    },
    image: {
        width: 200,
        height: 200
    },
    name: {
        color: '#333333',
        fontSize: 16
    },
    addButton: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: 200,
        height: 42,
        marginTop: 15,
        backgroundColor: '#7159C1',
        borderRadius: 5
    },
    addContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    addText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: "center"
    },
    productAmount: {
        color: '#FFFFFF',
        fontSize: 14
    },
    countProduct: {
        width: 53,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    price: {
        fontSize: 21,
        fontWeight: "bold"
    }
});
