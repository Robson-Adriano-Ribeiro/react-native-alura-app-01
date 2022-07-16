import React from "react";
import { Image, StyleSheet, View, Button } from 'react-native';
import CustomText from '../../../components/CustomText';
import { Card } from "./style";

export default function Detail({ subTitle, logo, name, description, price, button }) {
    return (
        <>
            <Card >
                <CustomText style={style.subTitle} >{subTitle}</CustomText>
                <View style={style.farm}>
                    <Image source={logo} style={style.logo} />
                    <CustomText style={style.name}>{name}</CustomText>
                </View>
                <CustomText style={style.description}> {description}</CustomText>
                <CustomText style={style.price}>{price}</CustomText>
            </Card>
            <Button title={button} />
        </>
    )
}

const style = StyleSheet.create({
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