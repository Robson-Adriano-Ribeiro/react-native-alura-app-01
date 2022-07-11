import React from "react";
import { Image, StyleSheet, View } from 'react-native';
import CustomText from '../../../components/CustomText';

export default function Detail({ subTitle, logo, name, description, price }) {
    return (
        <>
            <View style={style.card} >
                <CustomText style={style.subTitle} >{subTitle}</CustomText>
                <View style={style.farm}>
                    <Image source={logo} style={style.logo} />
                    <CustomText style={style.name}>{name}</CustomText>
                </View>
                <CustomText style={style.description}> {description}</CustomText>
                <CustomText style={style.price}>{price}</CustomText>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    card: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    subTitle: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold",
    },
    farm: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    logo: {
        width: 32,
        height: 32,
    },
    name: {
        fontSize: 16,
        lineHeight: 26,
        paddingLeft: 12,
    },
    description: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    price: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
})